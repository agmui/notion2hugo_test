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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJVI442T%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeflYJ8fMRKuvsWH7P6GiNaoaconFSu6IZz6r8L0QHVgIhAJnJT7mWinhu7zudc%2B26A5RFztDtxrA6Wrb8yO9sCUA5KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhVBLQVm0NteemQxoq3AMYuraRU1XuovVu50XovCWCnZq0x9Eb1h9Oqqw%2FWvVZdkIgg2rq%2BRltc7ttmeQ5EVX8YOpzZTi8upQUuhDbkoRFrs7LNhulGTqTmpc34m3qNoEsskhI3lKfKPkCnD6jHyVnxFtFMUyNdjh8uSs1OctFMUzwKOooEp7vqr2MGIISxX%2BfVJcfKjFSAywahK9SoeAWkyY%2BOCaR5gBUxG%2BEC2XV5ytbpuPeKXSIwlmKyMiIzsNTRcB2JSY5bwm6kuBcpglkK9VsBnZ7fKtpuRNLepq0kHzLNkCCe4JKiCp6C1Jv4e3ct8DCn4shsCn4fIRJtVU8GtmbjiAeHEnHJobKjnKAG7XKy5b%2Bpp7R7GahXIItmsTZDx9z53OKn3dyHfWMsr1WHmiXA7FGvw8u9NsxFn4Ri%2F7BF3751vO7BRUXsLfGbl%2FE3EEch1Xj5igdsh5OgEkfMhrQWi%2FNMEkWJu%2FrOGwZL%2Bzq2A1k9RU7VR%2BOOBYwOEh3eDK33uXcCuCeNmNiuEqZ49pvBAFMFfosG9QTVBNYFrylQ5KdN%2FximcNDNWkCHRKqp1dFrBNH%2B1xHlpj8dShPp7lsoYppbGcqecGSp0iS7PoZyjox2z9EarKqKvGgH7KJDakQ%2FzFWczuEUDC8hY7DBjqkAcXsVwCNNU5F41SLeQxeaAh3CC3F6JvjWpJrynczroxRE4g7LqrUfWcTrGyslp%2BtesGi0uRQImXIkzAutAJlzG5ZyjnwrF04yqwtY2HLyVqnxGSFJN9SCOYbohy06sicu7b0ITgxboVQrVcKnfZS%2FCAOnxasPhiY5VwaicFeOaCbemIREHrvZoPqS3S2dFJmixP3h7rZo3KJxgtbgwIzoAz3D0xu&X-Amz-Signature=dca4c3ec0c01ec4412b379c6fee24a871e19175832cbc5bf13fc6f210bad8c3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJVI442T%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeflYJ8fMRKuvsWH7P6GiNaoaconFSu6IZz6r8L0QHVgIhAJnJT7mWinhu7zudc%2B26A5RFztDtxrA6Wrb8yO9sCUA5KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhVBLQVm0NteemQxoq3AMYuraRU1XuovVu50XovCWCnZq0x9Eb1h9Oqqw%2FWvVZdkIgg2rq%2BRltc7ttmeQ5EVX8YOpzZTi8upQUuhDbkoRFrs7LNhulGTqTmpc34m3qNoEsskhI3lKfKPkCnD6jHyVnxFtFMUyNdjh8uSs1OctFMUzwKOooEp7vqr2MGIISxX%2BfVJcfKjFSAywahK9SoeAWkyY%2BOCaR5gBUxG%2BEC2XV5ytbpuPeKXSIwlmKyMiIzsNTRcB2JSY5bwm6kuBcpglkK9VsBnZ7fKtpuRNLepq0kHzLNkCCe4JKiCp6C1Jv4e3ct8DCn4shsCn4fIRJtVU8GtmbjiAeHEnHJobKjnKAG7XKy5b%2Bpp7R7GahXIItmsTZDx9z53OKn3dyHfWMsr1WHmiXA7FGvw8u9NsxFn4Ri%2F7BF3751vO7BRUXsLfGbl%2FE3EEch1Xj5igdsh5OgEkfMhrQWi%2FNMEkWJu%2FrOGwZL%2Bzq2A1k9RU7VR%2BOOBYwOEh3eDK33uXcCuCeNmNiuEqZ49pvBAFMFfosG9QTVBNYFrylQ5KdN%2FximcNDNWkCHRKqp1dFrBNH%2B1xHlpj8dShPp7lsoYppbGcqecGSp0iS7PoZyjox2z9EarKqKvGgH7KJDakQ%2FzFWczuEUDC8hY7DBjqkAcXsVwCNNU5F41SLeQxeaAh3CC3F6JvjWpJrynczroxRE4g7LqrUfWcTrGyslp%2BtesGi0uRQImXIkzAutAJlzG5ZyjnwrF04yqwtY2HLyVqnxGSFJN9SCOYbohy06sicu7b0ITgxboVQrVcKnfZS%2FCAOnxasPhiY5VwaicFeOaCbemIREHrvZoPqS3S2dFJmixP3h7rZo3KJxgtbgwIzoAz3D0xu&X-Amz-Signature=9a236b5d5c2357ba5ab685a0807aa99898710a3c2336774086a38e987ffb674f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJVI442T%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeflYJ8fMRKuvsWH7P6GiNaoaconFSu6IZz6r8L0QHVgIhAJnJT7mWinhu7zudc%2B26A5RFztDtxrA6Wrb8yO9sCUA5KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhVBLQVm0NteemQxoq3AMYuraRU1XuovVu50XovCWCnZq0x9Eb1h9Oqqw%2FWvVZdkIgg2rq%2BRltc7ttmeQ5EVX8YOpzZTi8upQUuhDbkoRFrs7LNhulGTqTmpc34m3qNoEsskhI3lKfKPkCnD6jHyVnxFtFMUyNdjh8uSs1OctFMUzwKOooEp7vqr2MGIISxX%2BfVJcfKjFSAywahK9SoeAWkyY%2BOCaR5gBUxG%2BEC2XV5ytbpuPeKXSIwlmKyMiIzsNTRcB2JSY5bwm6kuBcpglkK9VsBnZ7fKtpuRNLepq0kHzLNkCCe4JKiCp6C1Jv4e3ct8DCn4shsCn4fIRJtVU8GtmbjiAeHEnHJobKjnKAG7XKy5b%2Bpp7R7GahXIItmsTZDx9z53OKn3dyHfWMsr1WHmiXA7FGvw8u9NsxFn4Ri%2F7BF3751vO7BRUXsLfGbl%2FE3EEch1Xj5igdsh5OgEkfMhrQWi%2FNMEkWJu%2FrOGwZL%2Bzq2A1k9RU7VR%2BOOBYwOEh3eDK33uXcCuCeNmNiuEqZ49pvBAFMFfosG9QTVBNYFrylQ5KdN%2FximcNDNWkCHRKqp1dFrBNH%2B1xHlpj8dShPp7lsoYppbGcqecGSp0iS7PoZyjox2z9EarKqKvGgH7KJDakQ%2FzFWczuEUDC8hY7DBjqkAcXsVwCNNU5F41SLeQxeaAh3CC3F6JvjWpJrynczroxRE4g7LqrUfWcTrGyslp%2BtesGi0uRQImXIkzAutAJlzG5ZyjnwrF04yqwtY2HLyVqnxGSFJN9SCOYbohy06sicu7b0ITgxboVQrVcKnfZS%2FCAOnxasPhiY5VwaicFeOaCbemIREHrvZoPqS3S2dFJmixP3h7rZo3KJxgtbgwIzoAz3D0xu&X-Amz-Signature=6a2762d0bf87e4db3dca866b05948ad64901ac16116f82b7121667fdd12f9e70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJVI442T%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeflYJ8fMRKuvsWH7P6GiNaoaconFSu6IZz6r8L0QHVgIhAJnJT7mWinhu7zudc%2B26A5RFztDtxrA6Wrb8yO9sCUA5KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhVBLQVm0NteemQxoq3AMYuraRU1XuovVu50XovCWCnZq0x9Eb1h9Oqqw%2FWvVZdkIgg2rq%2BRltc7ttmeQ5EVX8YOpzZTi8upQUuhDbkoRFrs7LNhulGTqTmpc34m3qNoEsskhI3lKfKPkCnD6jHyVnxFtFMUyNdjh8uSs1OctFMUzwKOooEp7vqr2MGIISxX%2BfVJcfKjFSAywahK9SoeAWkyY%2BOCaR5gBUxG%2BEC2XV5ytbpuPeKXSIwlmKyMiIzsNTRcB2JSY5bwm6kuBcpglkK9VsBnZ7fKtpuRNLepq0kHzLNkCCe4JKiCp6C1Jv4e3ct8DCn4shsCn4fIRJtVU8GtmbjiAeHEnHJobKjnKAG7XKy5b%2Bpp7R7GahXIItmsTZDx9z53OKn3dyHfWMsr1WHmiXA7FGvw8u9NsxFn4Ri%2F7BF3751vO7BRUXsLfGbl%2FE3EEch1Xj5igdsh5OgEkfMhrQWi%2FNMEkWJu%2FrOGwZL%2Bzq2A1k9RU7VR%2BOOBYwOEh3eDK33uXcCuCeNmNiuEqZ49pvBAFMFfosG9QTVBNYFrylQ5KdN%2FximcNDNWkCHRKqp1dFrBNH%2B1xHlpj8dShPp7lsoYppbGcqecGSp0iS7PoZyjox2z9EarKqKvGgH7KJDakQ%2FzFWczuEUDC8hY7DBjqkAcXsVwCNNU5F41SLeQxeaAh3CC3F6JvjWpJrynczroxRE4g7LqrUfWcTrGyslp%2BtesGi0uRQImXIkzAutAJlzG5ZyjnwrF04yqwtY2HLyVqnxGSFJN9SCOYbohy06sicu7b0ITgxboVQrVcKnfZS%2FCAOnxasPhiY5VwaicFeOaCbemIREHrvZoPqS3S2dFJmixP3h7rZo3KJxgtbgwIzoAz3D0xu&X-Amz-Signature=62019c477608ea410dbdc7f58700b779263fc8c1584ca64acae226f3bf866d67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJVI442T%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeflYJ8fMRKuvsWH7P6GiNaoaconFSu6IZz6r8L0QHVgIhAJnJT7mWinhu7zudc%2B26A5RFztDtxrA6Wrb8yO9sCUA5KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhVBLQVm0NteemQxoq3AMYuraRU1XuovVu50XovCWCnZq0x9Eb1h9Oqqw%2FWvVZdkIgg2rq%2BRltc7ttmeQ5EVX8YOpzZTi8upQUuhDbkoRFrs7LNhulGTqTmpc34m3qNoEsskhI3lKfKPkCnD6jHyVnxFtFMUyNdjh8uSs1OctFMUzwKOooEp7vqr2MGIISxX%2BfVJcfKjFSAywahK9SoeAWkyY%2BOCaR5gBUxG%2BEC2XV5ytbpuPeKXSIwlmKyMiIzsNTRcB2JSY5bwm6kuBcpglkK9VsBnZ7fKtpuRNLepq0kHzLNkCCe4JKiCp6C1Jv4e3ct8DCn4shsCn4fIRJtVU8GtmbjiAeHEnHJobKjnKAG7XKy5b%2Bpp7R7GahXIItmsTZDx9z53OKn3dyHfWMsr1WHmiXA7FGvw8u9NsxFn4Ri%2F7BF3751vO7BRUXsLfGbl%2FE3EEch1Xj5igdsh5OgEkfMhrQWi%2FNMEkWJu%2FrOGwZL%2Bzq2A1k9RU7VR%2BOOBYwOEh3eDK33uXcCuCeNmNiuEqZ49pvBAFMFfosG9QTVBNYFrylQ5KdN%2FximcNDNWkCHRKqp1dFrBNH%2B1xHlpj8dShPp7lsoYppbGcqecGSp0iS7PoZyjox2z9EarKqKvGgH7KJDakQ%2FzFWczuEUDC8hY7DBjqkAcXsVwCNNU5F41SLeQxeaAh3CC3F6JvjWpJrynczroxRE4g7LqrUfWcTrGyslp%2BtesGi0uRQImXIkzAutAJlzG5ZyjnwrF04yqwtY2HLyVqnxGSFJN9SCOYbohy06sicu7b0ITgxboVQrVcKnfZS%2FCAOnxasPhiY5VwaicFeOaCbemIREHrvZoPqS3S2dFJmixP3h7rZo3KJxgtbgwIzoAz3D0xu&X-Amz-Signature=a1c6b9756de7dc45ac47f8e888326fd48345dc2ea6a525762a01d18a666908e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJVI442T%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeflYJ8fMRKuvsWH7P6GiNaoaconFSu6IZz6r8L0QHVgIhAJnJT7mWinhu7zudc%2B26A5RFztDtxrA6Wrb8yO9sCUA5KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhVBLQVm0NteemQxoq3AMYuraRU1XuovVu50XovCWCnZq0x9Eb1h9Oqqw%2FWvVZdkIgg2rq%2BRltc7ttmeQ5EVX8YOpzZTi8upQUuhDbkoRFrs7LNhulGTqTmpc34m3qNoEsskhI3lKfKPkCnD6jHyVnxFtFMUyNdjh8uSs1OctFMUzwKOooEp7vqr2MGIISxX%2BfVJcfKjFSAywahK9SoeAWkyY%2BOCaR5gBUxG%2BEC2XV5ytbpuPeKXSIwlmKyMiIzsNTRcB2JSY5bwm6kuBcpglkK9VsBnZ7fKtpuRNLepq0kHzLNkCCe4JKiCp6C1Jv4e3ct8DCn4shsCn4fIRJtVU8GtmbjiAeHEnHJobKjnKAG7XKy5b%2Bpp7R7GahXIItmsTZDx9z53OKn3dyHfWMsr1WHmiXA7FGvw8u9NsxFn4Ri%2F7BF3751vO7BRUXsLfGbl%2FE3EEch1Xj5igdsh5OgEkfMhrQWi%2FNMEkWJu%2FrOGwZL%2Bzq2A1k9RU7VR%2BOOBYwOEh3eDK33uXcCuCeNmNiuEqZ49pvBAFMFfosG9QTVBNYFrylQ5KdN%2FximcNDNWkCHRKqp1dFrBNH%2B1xHlpj8dShPp7lsoYppbGcqecGSp0iS7PoZyjox2z9EarKqKvGgH7KJDakQ%2FzFWczuEUDC8hY7DBjqkAcXsVwCNNU5F41SLeQxeaAh3CC3F6JvjWpJrynczroxRE4g7LqrUfWcTrGyslp%2BtesGi0uRQImXIkzAutAJlzG5ZyjnwrF04yqwtY2HLyVqnxGSFJN9SCOYbohy06sicu7b0ITgxboVQrVcKnfZS%2FCAOnxasPhiY5VwaicFeOaCbemIREHrvZoPqS3S2dFJmixP3h7rZo3KJxgtbgwIzoAz3D0xu&X-Amz-Signature=30806bfb2ebebfe392ecfd31b45c753d98703c7002f2b396a3c6dd664636f816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJVI442T%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeflYJ8fMRKuvsWH7P6GiNaoaconFSu6IZz6r8L0QHVgIhAJnJT7mWinhu7zudc%2B26A5RFztDtxrA6Wrb8yO9sCUA5KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhVBLQVm0NteemQxoq3AMYuraRU1XuovVu50XovCWCnZq0x9Eb1h9Oqqw%2FWvVZdkIgg2rq%2BRltc7ttmeQ5EVX8YOpzZTi8upQUuhDbkoRFrs7LNhulGTqTmpc34m3qNoEsskhI3lKfKPkCnD6jHyVnxFtFMUyNdjh8uSs1OctFMUzwKOooEp7vqr2MGIISxX%2BfVJcfKjFSAywahK9SoeAWkyY%2BOCaR5gBUxG%2BEC2XV5ytbpuPeKXSIwlmKyMiIzsNTRcB2JSY5bwm6kuBcpglkK9VsBnZ7fKtpuRNLepq0kHzLNkCCe4JKiCp6C1Jv4e3ct8DCn4shsCn4fIRJtVU8GtmbjiAeHEnHJobKjnKAG7XKy5b%2Bpp7R7GahXIItmsTZDx9z53OKn3dyHfWMsr1WHmiXA7FGvw8u9NsxFn4Ri%2F7BF3751vO7BRUXsLfGbl%2FE3EEch1Xj5igdsh5OgEkfMhrQWi%2FNMEkWJu%2FrOGwZL%2Bzq2A1k9RU7VR%2BOOBYwOEh3eDK33uXcCuCeNmNiuEqZ49pvBAFMFfosG9QTVBNYFrylQ5KdN%2FximcNDNWkCHRKqp1dFrBNH%2B1xHlpj8dShPp7lsoYppbGcqecGSp0iS7PoZyjox2z9EarKqKvGgH7KJDakQ%2FzFWczuEUDC8hY7DBjqkAcXsVwCNNU5F41SLeQxeaAh3CC3F6JvjWpJrynczroxRE4g7LqrUfWcTrGyslp%2BtesGi0uRQImXIkzAutAJlzG5ZyjnwrF04yqwtY2HLyVqnxGSFJN9SCOYbohy06sicu7b0ITgxboVQrVcKnfZS%2FCAOnxasPhiY5VwaicFeOaCbemIREHrvZoPqS3S2dFJmixP3h7rZo3KJxgtbgwIzoAz3D0xu&X-Amz-Signature=019569be54883c56578062451c365d62995bacdf8c7025b03ecbf00763ab974d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
