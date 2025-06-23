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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3CVN3R%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCICFSb8EAa2%2FPMpnZqKk6s7NmPbgt%2FeHXmL1YhDNsFG2YAiEAmoYlpO%2BLnuYZQzYNFAnx6B9B3pgNAid3Xf5Nwpi3bucq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKxJWSyk3ljdQSHZeCrcA2vix1JyS531xEtdusbouBcNvD%2FapZHDM%2BLs1Qr%2Bzgvj2XlwD8Kww6y82onf6Ro047hwsZVFrY7UwotEgUuq8NX5UfmjvPrijaIWjzUfgL08qtuJ91Kr4U9J%2BthgwzJ%2BxjlO0dn4JrYCHBMOMpuIe9cqtWzDxmSzvSYLFL7KAyJNo7PvVLV3RSgnpIagDrdsKfViPpbQQy3cfvJj0J7T%2FjnxNrBcFzCH2M1sdLCRR1EWdlsXqYle1pe7iLE2gNMxoa9hhiLww1m1ZecASg12zc5%2BDrl8W0rrudEHncR8qdE4cqiqnq7iFrBAnQ9ajPjXI6BSEk%2BeatNViItYQNk8%2Fi%2B7oULbppPKphrmFrQVmHfZYG%2FFreDRhGDKebR7SYxafFygtci%2BerxgQ%2B5ljriAulzBCOSZRTSUbPzSU0qpA2Pn1X99sAWDHeBfntqniDFJbI9nx8i4xOBLsmiOj433niFJHCNMx5m1A1znM814RBi%2FQs6ju%2BFontmCK1rnhqOo67xMrNjUdRf%2BIrKUl%2BCGS93PXlD7oQwnyIU2Y%2FUp0Bnr3SdubLTCyv20ECs4RwgaM%2BXD4c98FUSBqu51ZNqpzTVgotTBJUN5z%2F9dUe7AEQ8CviBQqobbD1oFbouvMLrz5MIGOqUBXBtQ1B4p00PmBhEFE1w00B74mSbLm%2FRGDtz82eejij0lIcor8Tq%2F4hRv6AGVYKdTgbOV5%2F852IJxwlSMTAFEmG746uboDdHf5%2FljCw8MDsTEysyyfEnFd3QhVmyCx%2BCPR%2B0w5LN5T%2B%2BRun0U6DnJITDr0Gi2oWtzSl9%2Fl8mlkBkKNEeDbejgnepPGOP4xOk%2B2bBozq0v2DvUbUnaXwPlU%2FFbasm1&X-Amz-Signature=7760d9d416b67f3584e0ee41cfd90bba3913e0a4e8fa0bc9fd613f678bb104b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3CVN3R%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCICFSb8EAa2%2FPMpnZqKk6s7NmPbgt%2FeHXmL1YhDNsFG2YAiEAmoYlpO%2BLnuYZQzYNFAnx6B9B3pgNAid3Xf5Nwpi3bucq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKxJWSyk3ljdQSHZeCrcA2vix1JyS531xEtdusbouBcNvD%2FapZHDM%2BLs1Qr%2Bzgvj2XlwD8Kww6y82onf6Ro047hwsZVFrY7UwotEgUuq8NX5UfmjvPrijaIWjzUfgL08qtuJ91Kr4U9J%2BthgwzJ%2BxjlO0dn4JrYCHBMOMpuIe9cqtWzDxmSzvSYLFL7KAyJNo7PvVLV3RSgnpIagDrdsKfViPpbQQy3cfvJj0J7T%2FjnxNrBcFzCH2M1sdLCRR1EWdlsXqYle1pe7iLE2gNMxoa9hhiLww1m1ZecASg12zc5%2BDrl8W0rrudEHncR8qdE4cqiqnq7iFrBAnQ9ajPjXI6BSEk%2BeatNViItYQNk8%2Fi%2B7oULbppPKphrmFrQVmHfZYG%2FFreDRhGDKebR7SYxafFygtci%2BerxgQ%2B5ljriAulzBCOSZRTSUbPzSU0qpA2Pn1X99sAWDHeBfntqniDFJbI9nx8i4xOBLsmiOj433niFJHCNMx5m1A1znM814RBi%2FQs6ju%2BFontmCK1rnhqOo67xMrNjUdRf%2BIrKUl%2BCGS93PXlD7oQwnyIU2Y%2FUp0Bnr3SdubLTCyv20ECs4RwgaM%2BXD4c98FUSBqu51ZNqpzTVgotTBJUN5z%2F9dUe7AEQ8CviBQqobbD1oFbouvMLrz5MIGOqUBXBtQ1B4p00PmBhEFE1w00B74mSbLm%2FRGDtz82eejij0lIcor8Tq%2F4hRv6AGVYKdTgbOV5%2F852IJxwlSMTAFEmG746uboDdHf5%2FljCw8MDsTEysyyfEnFd3QhVmyCx%2BCPR%2B0w5LN5T%2B%2BRun0U6DnJITDr0Gi2oWtzSl9%2Fl8mlkBkKNEeDbejgnepPGOP4xOk%2B2bBozq0v2DvUbUnaXwPlU%2FFbasm1&X-Amz-Signature=8d857ebed13f813db138cd3b08b546639330d15aa6c6e6793344833df50bc5db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3CVN3R%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCICFSb8EAa2%2FPMpnZqKk6s7NmPbgt%2FeHXmL1YhDNsFG2YAiEAmoYlpO%2BLnuYZQzYNFAnx6B9B3pgNAid3Xf5Nwpi3bucq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKxJWSyk3ljdQSHZeCrcA2vix1JyS531xEtdusbouBcNvD%2FapZHDM%2BLs1Qr%2Bzgvj2XlwD8Kww6y82onf6Ro047hwsZVFrY7UwotEgUuq8NX5UfmjvPrijaIWjzUfgL08qtuJ91Kr4U9J%2BthgwzJ%2BxjlO0dn4JrYCHBMOMpuIe9cqtWzDxmSzvSYLFL7KAyJNo7PvVLV3RSgnpIagDrdsKfViPpbQQy3cfvJj0J7T%2FjnxNrBcFzCH2M1sdLCRR1EWdlsXqYle1pe7iLE2gNMxoa9hhiLww1m1ZecASg12zc5%2BDrl8W0rrudEHncR8qdE4cqiqnq7iFrBAnQ9ajPjXI6BSEk%2BeatNViItYQNk8%2Fi%2B7oULbppPKphrmFrQVmHfZYG%2FFreDRhGDKebR7SYxafFygtci%2BerxgQ%2B5ljriAulzBCOSZRTSUbPzSU0qpA2Pn1X99sAWDHeBfntqniDFJbI9nx8i4xOBLsmiOj433niFJHCNMx5m1A1znM814RBi%2FQs6ju%2BFontmCK1rnhqOo67xMrNjUdRf%2BIrKUl%2BCGS93PXlD7oQwnyIU2Y%2FUp0Bnr3SdubLTCyv20ECs4RwgaM%2BXD4c98FUSBqu51ZNqpzTVgotTBJUN5z%2F9dUe7AEQ8CviBQqobbD1oFbouvMLrz5MIGOqUBXBtQ1B4p00PmBhEFE1w00B74mSbLm%2FRGDtz82eejij0lIcor8Tq%2F4hRv6AGVYKdTgbOV5%2F852IJxwlSMTAFEmG746uboDdHf5%2FljCw8MDsTEysyyfEnFd3QhVmyCx%2BCPR%2B0w5LN5T%2B%2BRun0U6DnJITDr0Gi2oWtzSl9%2Fl8mlkBkKNEeDbejgnepPGOP4xOk%2B2bBozq0v2DvUbUnaXwPlU%2FFbasm1&X-Amz-Signature=b9fe077d69aa28b1d4f267a171c996b994799a4fc5ba7d380902c24c92847875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3CVN3R%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCICFSb8EAa2%2FPMpnZqKk6s7NmPbgt%2FeHXmL1YhDNsFG2YAiEAmoYlpO%2BLnuYZQzYNFAnx6B9B3pgNAid3Xf5Nwpi3bucq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKxJWSyk3ljdQSHZeCrcA2vix1JyS531xEtdusbouBcNvD%2FapZHDM%2BLs1Qr%2Bzgvj2XlwD8Kww6y82onf6Ro047hwsZVFrY7UwotEgUuq8NX5UfmjvPrijaIWjzUfgL08qtuJ91Kr4U9J%2BthgwzJ%2BxjlO0dn4JrYCHBMOMpuIe9cqtWzDxmSzvSYLFL7KAyJNo7PvVLV3RSgnpIagDrdsKfViPpbQQy3cfvJj0J7T%2FjnxNrBcFzCH2M1sdLCRR1EWdlsXqYle1pe7iLE2gNMxoa9hhiLww1m1ZecASg12zc5%2BDrl8W0rrudEHncR8qdE4cqiqnq7iFrBAnQ9ajPjXI6BSEk%2BeatNViItYQNk8%2Fi%2B7oULbppPKphrmFrQVmHfZYG%2FFreDRhGDKebR7SYxafFygtci%2BerxgQ%2B5ljriAulzBCOSZRTSUbPzSU0qpA2Pn1X99sAWDHeBfntqniDFJbI9nx8i4xOBLsmiOj433niFJHCNMx5m1A1znM814RBi%2FQs6ju%2BFontmCK1rnhqOo67xMrNjUdRf%2BIrKUl%2BCGS93PXlD7oQwnyIU2Y%2FUp0Bnr3SdubLTCyv20ECs4RwgaM%2BXD4c98FUSBqu51ZNqpzTVgotTBJUN5z%2F9dUe7AEQ8CviBQqobbD1oFbouvMLrz5MIGOqUBXBtQ1B4p00PmBhEFE1w00B74mSbLm%2FRGDtz82eejij0lIcor8Tq%2F4hRv6AGVYKdTgbOV5%2F852IJxwlSMTAFEmG746uboDdHf5%2FljCw8MDsTEysyyfEnFd3QhVmyCx%2BCPR%2B0w5LN5T%2B%2BRun0U6DnJITDr0Gi2oWtzSl9%2Fl8mlkBkKNEeDbejgnepPGOP4xOk%2B2bBozq0v2DvUbUnaXwPlU%2FFbasm1&X-Amz-Signature=f8fdb45808fbb45dae8454bded9b008ae6a82987c3fe116c783387141b3451c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3CVN3R%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCICFSb8EAa2%2FPMpnZqKk6s7NmPbgt%2FeHXmL1YhDNsFG2YAiEAmoYlpO%2BLnuYZQzYNFAnx6B9B3pgNAid3Xf5Nwpi3bucq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKxJWSyk3ljdQSHZeCrcA2vix1JyS531xEtdusbouBcNvD%2FapZHDM%2BLs1Qr%2Bzgvj2XlwD8Kww6y82onf6Ro047hwsZVFrY7UwotEgUuq8NX5UfmjvPrijaIWjzUfgL08qtuJ91Kr4U9J%2BthgwzJ%2BxjlO0dn4JrYCHBMOMpuIe9cqtWzDxmSzvSYLFL7KAyJNo7PvVLV3RSgnpIagDrdsKfViPpbQQy3cfvJj0J7T%2FjnxNrBcFzCH2M1sdLCRR1EWdlsXqYle1pe7iLE2gNMxoa9hhiLww1m1ZecASg12zc5%2BDrl8W0rrudEHncR8qdE4cqiqnq7iFrBAnQ9ajPjXI6BSEk%2BeatNViItYQNk8%2Fi%2B7oULbppPKphrmFrQVmHfZYG%2FFreDRhGDKebR7SYxafFygtci%2BerxgQ%2B5ljriAulzBCOSZRTSUbPzSU0qpA2Pn1X99sAWDHeBfntqniDFJbI9nx8i4xOBLsmiOj433niFJHCNMx5m1A1znM814RBi%2FQs6ju%2BFontmCK1rnhqOo67xMrNjUdRf%2BIrKUl%2BCGS93PXlD7oQwnyIU2Y%2FUp0Bnr3SdubLTCyv20ECs4RwgaM%2BXD4c98FUSBqu51ZNqpzTVgotTBJUN5z%2F9dUe7AEQ8CviBQqobbD1oFbouvMLrz5MIGOqUBXBtQ1B4p00PmBhEFE1w00B74mSbLm%2FRGDtz82eejij0lIcor8Tq%2F4hRv6AGVYKdTgbOV5%2F852IJxwlSMTAFEmG746uboDdHf5%2FljCw8MDsTEysyyfEnFd3QhVmyCx%2BCPR%2B0w5LN5T%2B%2BRun0U6DnJITDr0Gi2oWtzSl9%2Fl8mlkBkKNEeDbejgnepPGOP4xOk%2B2bBozq0v2DvUbUnaXwPlU%2FFbasm1&X-Amz-Signature=34fd733fa041724b95ce8afb764b6f6ea90af28085086ca1f09853b5727369f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3CVN3R%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCICFSb8EAa2%2FPMpnZqKk6s7NmPbgt%2FeHXmL1YhDNsFG2YAiEAmoYlpO%2BLnuYZQzYNFAnx6B9B3pgNAid3Xf5Nwpi3bucq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKxJWSyk3ljdQSHZeCrcA2vix1JyS531xEtdusbouBcNvD%2FapZHDM%2BLs1Qr%2Bzgvj2XlwD8Kww6y82onf6Ro047hwsZVFrY7UwotEgUuq8NX5UfmjvPrijaIWjzUfgL08qtuJ91Kr4U9J%2BthgwzJ%2BxjlO0dn4JrYCHBMOMpuIe9cqtWzDxmSzvSYLFL7KAyJNo7PvVLV3RSgnpIagDrdsKfViPpbQQy3cfvJj0J7T%2FjnxNrBcFzCH2M1sdLCRR1EWdlsXqYle1pe7iLE2gNMxoa9hhiLww1m1ZecASg12zc5%2BDrl8W0rrudEHncR8qdE4cqiqnq7iFrBAnQ9ajPjXI6BSEk%2BeatNViItYQNk8%2Fi%2B7oULbppPKphrmFrQVmHfZYG%2FFreDRhGDKebR7SYxafFygtci%2BerxgQ%2B5ljriAulzBCOSZRTSUbPzSU0qpA2Pn1X99sAWDHeBfntqniDFJbI9nx8i4xOBLsmiOj433niFJHCNMx5m1A1znM814RBi%2FQs6ju%2BFontmCK1rnhqOo67xMrNjUdRf%2BIrKUl%2BCGS93PXlD7oQwnyIU2Y%2FUp0Bnr3SdubLTCyv20ECs4RwgaM%2BXD4c98FUSBqu51ZNqpzTVgotTBJUN5z%2F9dUe7AEQ8CviBQqobbD1oFbouvMLrz5MIGOqUBXBtQ1B4p00PmBhEFE1w00B74mSbLm%2FRGDtz82eejij0lIcor8Tq%2F4hRv6AGVYKdTgbOV5%2F852IJxwlSMTAFEmG746uboDdHf5%2FljCw8MDsTEysyyfEnFd3QhVmyCx%2BCPR%2B0w5LN5T%2B%2BRun0U6DnJITDr0Gi2oWtzSl9%2Fl8mlkBkKNEeDbejgnepPGOP4xOk%2B2bBozq0v2DvUbUnaXwPlU%2FFbasm1&X-Amz-Signature=fd07a58575cf3992514d72f301d94806c8b2029273fb4659a6162da956e7d808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3CVN3R%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCICFSb8EAa2%2FPMpnZqKk6s7NmPbgt%2FeHXmL1YhDNsFG2YAiEAmoYlpO%2BLnuYZQzYNFAnx6B9B3pgNAid3Xf5Nwpi3bucq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKxJWSyk3ljdQSHZeCrcA2vix1JyS531xEtdusbouBcNvD%2FapZHDM%2BLs1Qr%2Bzgvj2XlwD8Kww6y82onf6Ro047hwsZVFrY7UwotEgUuq8NX5UfmjvPrijaIWjzUfgL08qtuJ91Kr4U9J%2BthgwzJ%2BxjlO0dn4JrYCHBMOMpuIe9cqtWzDxmSzvSYLFL7KAyJNo7PvVLV3RSgnpIagDrdsKfViPpbQQy3cfvJj0J7T%2FjnxNrBcFzCH2M1sdLCRR1EWdlsXqYle1pe7iLE2gNMxoa9hhiLww1m1ZecASg12zc5%2BDrl8W0rrudEHncR8qdE4cqiqnq7iFrBAnQ9ajPjXI6BSEk%2BeatNViItYQNk8%2Fi%2B7oULbppPKphrmFrQVmHfZYG%2FFreDRhGDKebR7SYxafFygtci%2BerxgQ%2B5ljriAulzBCOSZRTSUbPzSU0qpA2Pn1X99sAWDHeBfntqniDFJbI9nx8i4xOBLsmiOj433niFJHCNMx5m1A1znM814RBi%2FQs6ju%2BFontmCK1rnhqOo67xMrNjUdRf%2BIrKUl%2BCGS93PXlD7oQwnyIU2Y%2FUp0Bnr3SdubLTCyv20ECs4RwgaM%2BXD4c98FUSBqu51ZNqpzTVgotTBJUN5z%2F9dUe7AEQ8CviBQqobbD1oFbouvMLrz5MIGOqUBXBtQ1B4p00PmBhEFE1w00B74mSbLm%2FRGDtz82eejij0lIcor8Tq%2F4hRv6AGVYKdTgbOV5%2F852IJxwlSMTAFEmG746uboDdHf5%2FljCw8MDsTEysyyfEnFd3QhVmyCx%2BCPR%2B0w5LN5T%2B%2BRun0U6DnJITDr0Gi2oWtzSl9%2Fl8mlkBkKNEeDbejgnepPGOP4xOk%2B2bBozq0v2DvUbUnaXwPlU%2FFbasm1&X-Amz-Signature=173a8bec66afe101f75cd1cead01440134767bb9dbc5d5a9b37f83980fb9740d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
