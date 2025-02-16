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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNLLISVB%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCYgv4PzFq65bUAOFzw5kB7NMUL4VhpdGlZ%2FLyPBVqdrQIhAKM3qEkucp%2B99NetTvrZu214wTyROq5%2BcOq1w5Xh8HGJKv8DCGMQABoMNjM3NDIzMTgzODA1Igxb9ik8LRZK53uxL9Eq3AOqxMLanT6m3yfnWib%2Fn6gu7kI7RjD%2Bk0gUTb6doJpx4K2pALIoApSu2tmopH12rpTmQ73KK7DcupjbOv5hMH965jeSj1%2BoBHxKuhtTwlbb2Nxu9QPUV%2BGpx9IvSZk97G34YF6CgwsFWlkgmwsWZpYYgKEYI7cUzKcziFSNwYjGwCdJQFq13rbEPguUguypv7mkIZKEmuVP67LywbHcAgEqpWkHQsXUiJq5TDWSeczyjFuPtOvn%2BDaeoBcRwmz8F5LzO22yC7zqjE1q2COZCDdPSri93DRDUw8IfaXd%2B1lCa%2FcWtsll3f0hZ7iLY2R3RCYculs5lNhW1RIUq8g8yRz0FFz%2BQaCCWx3LQrdsIFk5mvCc998oadDqkopCgEmoDbMRKH0ZhfphYbhKUb484sfD5AFR0V0BVMQLq0z1Kk%2B5hH2JE4DIfcNIalSdYy8A0d466ltzDqQAwfd%2B92j4ZP3VlinagrDd%2FiAfOBQVA%2FkpLI9DUkaMsJb8S97wjh7JnkhzU9a8CihZTM5LnJSoThbe%2BEGnZKcjTQqas88c25krXZl%2FpsiUaDVLJEHNlr9f5DiHLIHvWhLLne1XEMDfdf1iSxYZFS9ufMV5DQeT5gEHQWPVLVzbmQpj0XgnFDDjwci9BjqkARyTlsbHZywo52%2FHQsw2erAkrFb4BxGVNL3FJ9pon%2F36Gyqr%2FWR2J%2FtdNsUcIM18TW8k%2BgvxdGnw1sWmxrw7JpT01Pit2MCmV%2Fd%2FlMgozkUVyqIte9OtpZgQG%2BJq7A87Mh3NfJvfHzkWer%2BXwPnbBTOgP5InJB7mM9GBxkrg0atAsbna5PnV0g5VKDar1zpoXydqMq1liTgbeAjZVoVwf6sxBKD5&X-Amz-Signature=d6b0dca73e16a73236cf12b4c698fac0e53106334d0b314f0dc3b2b86139e78e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNLLISVB%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCYgv4PzFq65bUAOFzw5kB7NMUL4VhpdGlZ%2FLyPBVqdrQIhAKM3qEkucp%2B99NetTvrZu214wTyROq5%2BcOq1w5Xh8HGJKv8DCGMQABoMNjM3NDIzMTgzODA1Igxb9ik8LRZK53uxL9Eq3AOqxMLanT6m3yfnWib%2Fn6gu7kI7RjD%2Bk0gUTb6doJpx4K2pALIoApSu2tmopH12rpTmQ73KK7DcupjbOv5hMH965jeSj1%2BoBHxKuhtTwlbb2Nxu9QPUV%2BGpx9IvSZk97G34YF6CgwsFWlkgmwsWZpYYgKEYI7cUzKcziFSNwYjGwCdJQFq13rbEPguUguypv7mkIZKEmuVP67LywbHcAgEqpWkHQsXUiJq5TDWSeczyjFuPtOvn%2BDaeoBcRwmz8F5LzO22yC7zqjE1q2COZCDdPSri93DRDUw8IfaXd%2B1lCa%2FcWtsll3f0hZ7iLY2R3RCYculs5lNhW1RIUq8g8yRz0FFz%2BQaCCWx3LQrdsIFk5mvCc998oadDqkopCgEmoDbMRKH0ZhfphYbhKUb484sfD5AFR0V0BVMQLq0z1Kk%2B5hH2JE4DIfcNIalSdYy8A0d466ltzDqQAwfd%2B92j4ZP3VlinagrDd%2FiAfOBQVA%2FkpLI9DUkaMsJb8S97wjh7JnkhzU9a8CihZTM5LnJSoThbe%2BEGnZKcjTQqas88c25krXZl%2FpsiUaDVLJEHNlr9f5DiHLIHvWhLLne1XEMDfdf1iSxYZFS9ufMV5DQeT5gEHQWPVLVzbmQpj0XgnFDDjwci9BjqkARyTlsbHZywo52%2FHQsw2erAkrFb4BxGVNL3FJ9pon%2F36Gyqr%2FWR2J%2FtdNsUcIM18TW8k%2BgvxdGnw1sWmxrw7JpT01Pit2MCmV%2Fd%2FlMgozkUVyqIte9OtpZgQG%2BJq7A87Mh3NfJvfHzkWer%2BXwPnbBTOgP5InJB7mM9GBxkrg0atAsbna5PnV0g5VKDar1zpoXydqMq1liTgbeAjZVoVwf6sxBKD5&X-Amz-Signature=16c74446fa503a2bc7793adb5860e434e08671a89d5a8a2c9c73e48686c91228&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNLLISVB%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCYgv4PzFq65bUAOFzw5kB7NMUL4VhpdGlZ%2FLyPBVqdrQIhAKM3qEkucp%2B99NetTvrZu214wTyROq5%2BcOq1w5Xh8HGJKv8DCGMQABoMNjM3NDIzMTgzODA1Igxb9ik8LRZK53uxL9Eq3AOqxMLanT6m3yfnWib%2Fn6gu7kI7RjD%2Bk0gUTb6doJpx4K2pALIoApSu2tmopH12rpTmQ73KK7DcupjbOv5hMH965jeSj1%2BoBHxKuhtTwlbb2Nxu9QPUV%2BGpx9IvSZk97G34YF6CgwsFWlkgmwsWZpYYgKEYI7cUzKcziFSNwYjGwCdJQFq13rbEPguUguypv7mkIZKEmuVP67LywbHcAgEqpWkHQsXUiJq5TDWSeczyjFuPtOvn%2BDaeoBcRwmz8F5LzO22yC7zqjE1q2COZCDdPSri93DRDUw8IfaXd%2B1lCa%2FcWtsll3f0hZ7iLY2R3RCYculs5lNhW1RIUq8g8yRz0FFz%2BQaCCWx3LQrdsIFk5mvCc998oadDqkopCgEmoDbMRKH0ZhfphYbhKUb484sfD5AFR0V0BVMQLq0z1Kk%2B5hH2JE4DIfcNIalSdYy8A0d466ltzDqQAwfd%2B92j4ZP3VlinagrDd%2FiAfOBQVA%2FkpLI9DUkaMsJb8S97wjh7JnkhzU9a8CihZTM5LnJSoThbe%2BEGnZKcjTQqas88c25krXZl%2FpsiUaDVLJEHNlr9f5DiHLIHvWhLLne1XEMDfdf1iSxYZFS9ufMV5DQeT5gEHQWPVLVzbmQpj0XgnFDDjwci9BjqkARyTlsbHZywo52%2FHQsw2erAkrFb4BxGVNL3FJ9pon%2F36Gyqr%2FWR2J%2FtdNsUcIM18TW8k%2BgvxdGnw1sWmxrw7JpT01Pit2MCmV%2Fd%2FlMgozkUVyqIte9OtpZgQG%2BJq7A87Mh3NfJvfHzkWer%2BXwPnbBTOgP5InJB7mM9GBxkrg0atAsbna5PnV0g5VKDar1zpoXydqMq1liTgbeAjZVoVwf6sxBKD5&X-Amz-Signature=b248224a7be0c1aa5bf6cafe355f7b2cd24f9fbc0b9a503d830f8b93d09f388b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNLLISVB%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCYgv4PzFq65bUAOFzw5kB7NMUL4VhpdGlZ%2FLyPBVqdrQIhAKM3qEkucp%2B99NetTvrZu214wTyROq5%2BcOq1w5Xh8HGJKv8DCGMQABoMNjM3NDIzMTgzODA1Igxb9ik8LRZK53uxL9Eq3AOqxMLanT6m3yfnWib%2Fn6gu7kI7RjD%2Bk0gUTb6doJpx4K2pALIoApSu2tmopH12rpTmQ73KK7DcupjbOv5hMH965jeSj1%2BoBHxKuhtTwlbb2Nxu9QPUV%2BGpx9IvSZk97G34YF6CgwsFWlkgmwsWZpYYgKEYI7cUzKcziFSNwYjGwCdJQFq13rbEPguUguypv7mkIZKEmuVP67LywbHcAgEqpWkHQsXUiJq5TDWSeczyjFuPtOvn%2BDaeoBcRwmz8F5LzO22yC7zqjE1q2COZCDdPSri93DRDUw8IfaXd%2B1lCa%2FcWtsll3f0hZ7iLY2R3RCYculs5lNhW1RIUq8g8yRz0FFz%2BQaCCWx3LQrdsIFk5mvCc998oadDqkopCgEmoDbMRKH0ZhfphYbhKUb484sfD5AFR0V0BVMQLq0z1Kk%2B5hH2JE4DIfcNIalSdYy8A0d466ltzDqQAwfd%2B92j4ZP3VlinagrDd%2FiAfOBQVA%2FkpLI9DUkaMsJb8S97wjh7JnkhzU9a8CihZTM5LnJSoThbe%2BEGnZKcjTQqas88c25krXZl%2FpsiUaDVLJEHNlr9f5DiHLIHvWhLLne1XEMDfdf1iSxYZFS9ufMV5DQeT5gEHQWPVLVzbmQpj0XgnFDDjwci9BjqkARyTlsbHZywo52%2FHQsw2erAkrFb4BxGVNL3FJ9pon%2F36Gyqr%2FWR2J%2FtdNsUcIM18TW8k%2BgvxdGnw1sWmxrw7JpT01Pit2MCmV%2Fd%2FlMgozkUVyqIte9OtpZgQG%2BJq7A87Mh3NfJvfHzkWer%2BXwPnbBTOgP5InJB7mM9GBxkrg0atAsbna5PnV0g5VKDar1zpoXydqMq1liTgbeAjZVoVwf6sxBKD5&X-Amz-Signature=c93828aa50af53dcb3328cc6cff95eaa73f950c02b7fecba421ef1305cbdf978&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNLLISVB%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCYgv4PzFq65bUAOFzw5kB7NMUL4VhpdGlZ%2FLyPBVqdrQIhAKM3qEkucp%2B99NetTvrZu214wTyROq5%2BcOq1w5Xh8HGJKv8DCGMQABoMNjM3NDIzMTgzODA1Igxb9ik8LRZK53uxL9Eq3AOqxMLanT6m3yfnWib%2Fn6gu7kI7RjD%2Bk0gUTb6doJpx4K2pALIoApSu2tmopH12rpTmQ73KK7DcupjbOv5hMH965jeSj1%2BoBHxKuhtTwlbb2Nxu9QPUV%2BGpx9IvSZk97G34YF6CgwsFWlkgmwsWZpYYgKEYI7cUzKcziFSNwYjGwCdJQFq13rbEPguUguypv7mkIZKEmuVP67LywbHcAgEqpWkHQsXUiJq5TDWSeczyjFuPtOvn%2BDaeoBcRwmz8F5LzO22yC7zqjE1q2COZCDdPSri93DRDUw8IfaXd%2B1lCa%2FcWtsll3f0hZ7iLY2R3RCYculs5lNhW1RIUq8g8yRz0FFz%2BQaCCWx3LQrdsIFk5mvCc998oadDqkopCgEmoDbMRKH0ZhfphYbhKUb484sfD5AFR0V0BVMQLq0z1Kk%2B5hH2JE4DIfcNIalSdYy8A0d466ltzDqQAwfd%2B92j4ZP3VlinagrDd%2FiAfOBQVA%2FkpLI9DUkaMsJb8S97wjh7JnkhzU9a8CihZTM5LnJSoThbe%2BEGnZKcjTQqas88c25krXZl%2FpsiUaDVLJEHNlr9f5DiHLIHvWhLLne1XEMDfdf1iSxYZFS9ufMV5DQeT5gEHQWPVLVzbmQpj0XgnFDDjwci9BjqkARyTlsbHZywo52%2FHQsw2erAkrFb4BxGVNL3FJ9pon%2F36Gyqr%2FWR2J%2FtdNsUcIM18TW8k%2BgvxdGnw1sWmxrw7JpT01Pit2MCmV%2Fd%2FlMgozkUVyqIte9OtpZgQG%2BJq7A87Mh3NfJvfHzkWer%2BXwPnbBTOgP5InJB7mM9GBxkrg0atAsbna5PnV0g5VKDar1zpoXydqMq1liTgbeAjZVoVwf6sxBKD5&X-Amz-Signature=94f6191bb95d8003c0f83c85a08b15b8315859d91de5fa0ddf2eb71adc08e8ae&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNLLISVB%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCYgv4PzFq65bUAOFzw5kB7NMUL4VhpdGlZ%2FLyPBVqdrQIhAKM3qEkucp%2B99NetTvrZu214wTyROq5%2BcOq1w5Xh8HGJKv8DCGMQABoMNjM3NDIzMTgzODA1Igxb9ik8LRZK53uxL9Eq3AOqxMLanT6m3yfnWib%2Fn6gu7kI7RjD%2Bk0gUTb6doJpx4K2pALIoApSu2tmopH12rpTmQ73KK7DcupjbOv5hMH965jeSj1%2BoBHxKuhtTwlbb2Nxu9QPUV%2BGpx9IvSZk97G34YF6CgwsFWlkgmwsWZpYYgKEYI7cUzKcziFSNwYjGwCdJQFq13rbEPguUguypv7mkIZKEmuVP67LywbHcAgEqpWkHQsXUiJq5TDWSeczyjFuPtOvn%2BDaeoBcRwmz8F5LzO22yC7zqjE1q2COZCDdPSri93DRDUw8IfaXd%2B1lCa%2FcWtsll3f0hZ7iLY2R3RCYculs5lNhW1RIUq8g8yRz0FFz%2BQaCCWx3LQrdsIFk5mvCc998oadDqkopCgEmoDbMRKH0ZhfphYbhKUb484sfD5AFR0V0BVMQLq0z1Kk%2B5hH2JE4DIfcNIalSdYy8A0d466ltzDqQAwfd%2B92j4ZP3VlinagrDd%2FiAfOBQVA%2FkpLI9DUkaMsJb8S97wjh7JnkhzU9a8CihZTM5LnJSoThbe%2BEGnZKcjTQqas88c25krXZl%2FpsiUaDVLJEHNlr9f5DiHLIHvWhLLne1XEMDfdf1iSxYZFS9ufMV5DQeT5gEHQWPVLVzbmQpj0XgnFDDjwci9BjqkARyTlsbHZywo52%2FHQsw2erAkrFb4BxGVNL3FJ9pon%2F36Gyqr%2FWR2J%2FtdNsUcIM18TW8k%2BgvxdGnw1sWmxrw7JpT01Pit2MCmV%2Fd%2FlMgozkUVyqIte9OtpZgQG%2BJq7A87Mh3NfJvfHzkWer%2BXwPnbBTOgP5InJB7mM9GBxkrg0atAsbna5PnV0g5VKDar1zpoXydqMq1liTgbeAjZVoVwf6sxBKD5&X-Amz-Signature=632992466c633bc234149ee52bdaaed68c1be8c0392ed0e003a8d8295de8f3bf&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNLLISVB%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCYgv4PzFq65bUAOFzw5kB7NMUL4VhpdGlZ%2FLyPBVqdrQIhAKM3qEkucp%2B99NetTvrZu214wTyROq5%2BcOq1w5Xh8HGJKv8DCGMQABoMNjM3NDIzMTgzODA1Igxb9ik8LRZK53uxL9Eq3AOqxMLanT6m3yfnWib%2Fn6gu7kI7RjD%2Bk0gUTb6doJpx4K2pALIoApSu2tmopH12rpTmQ73KK7DcupjbOv5hMH965jeSj1%2BoBHxKuhtTwlbb2Nxu9QPUV%2BGpx9IvSZk97G34YF6CgwsFWlkgmwsWZpYYgKEYI7cUzKcziFSNwYjGwCdJQFq13rbEPguUguypv7mkIZKEmuVP67LywbHcAgEqpWkHQsXUiJq5TDWSeczyjFuPtOvn%2BDaeoBcRwmz8F5LzO22yC7zqjE1q2COZCDdPSri93DRDUw8IfaXd%2B1lCa%2FcWtsll3f0hZ7iLY2R3RCYculs5lNhW1RIUq8g8yRz0FFz%2BQaCCWx3LQrdsIFk5mvCc998oadDqkopCgEmoDbMRKH0ZhfphYbhKUb484sfD5AFR0V0BVMQLq0z1Kk%2B5hH2JE4DIfcNIalSdYy8A0d466ltzDqQAwfd%2B92j4ZP3VlinagrDd%2FiAfOBQVA%2FkpLI9DUkaMsJb8S97wjh7JnkhzU9a8CihZTM5LnJSoThbe%2BEGnZKcjTQqas88c25krXZl%2FpsiUaDVLJEHNlr9f5DiHLIHvWhLLne1XEMDfdf1iSxYZFS9ufMV5DQeT5gEHQWPVLVzbmQpj0XgnFDDjwci9BjqkARyTlsbHZywo52%2FHQsw2erAkrFb4BxGVNL3FJ9pon%2F36Gyqr%2FWR2J%2FtdNsUcIM18TW8k%2BgvxdGnw1sWmxrw7JpT01Pit2MCmV%2Fd%2FlMgozkUVyqIte9OtpZgQG%2BJq7A87Mh3NfJvfHzkWer%2BXwPnbBTOgP5InJB7mM9GBxkrg0atAsbna5PnV0g5VKDar1zpoXydqMq1liTgbeAjZVoVwf6sxBKD5&X-Amz-Signature=36f015387a7ce3836b8e4e9901c7744ad4f7db983648fa4e4cc95961a79506ee&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
