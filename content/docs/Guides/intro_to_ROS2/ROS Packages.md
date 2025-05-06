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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB56GWUX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXDnGI4jrSA2jrm1grwR%2Fon5UQ8Nl4HjLVhc%2FetvuYSAiBmQEKgosZ3z%2FtOEb%2F0T1Ww0gXICB5EJ90LdZOz85G4Sir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMmkvfHdH7qtGEIufZKtwDWHDdDY0smP9NZcAwhvIG0WVC72ZmD1Cg6KllhgECysRKwxXFfWN4Uph7aWCmpATyimbKX2ndg07zNtdXdm%2BcAo6zmAeJ%2FlWe2krFQrDk%2BIJlq9Aqll6OwVekDjqTBslNWVGKTP99klPIW6gg8svR8nHDIzzZLgR14WSURWoyFPSA5%2Bi2wyu3QDcVu6pNAozahjycxhLDZkRldhdXvV9Put8f2BSnGtQfmQlliXwoa%2BFqjWofc6x%2FqlEuihp%2FV4Moh1TMg723EVRB3PN9ugVA8UhXbJNTK31Sz%2FkMAijjBNbwlzndLC05cgtbeycDCKGchWlVp8ojeiF6Osf0Un8LmBhUM5d%2FaDJsEea60MacvuUyT8BeNp4f9KaqNDkLNenfWCP5XvyemUmBtKbim1iyh5YLcAeqQ3x9wVIPooGoumdmhDLSITpmFQocRMnffa4Zcr9rgQLW7XlsJBz7IpPiD%2F4UPQ6%2BjW0Ur0u0thzRZSuMJGVycL%2B1PZ8G%2BQtS4aZHX7rbpRZ9UcE4jEDZqzPlRB0M%2BAYJwByFVJNUPrunrrunoVVlZwPAslF866nQwG3kDC8ySvoZtjWeCIUlSEgC69ZYxxvy2ZHIjnORQlo%2BlCxHjE9UQOSgLUjXoiwwmLHmwAY6pgHcpGC5ligbV0BiIJvZoRL5boPI9%2FlvGww9b7hYnSvaOfJgJYW0BIGvv6fZ1uU663Ao3xH5Q96q%2FkKd3Y5%2Fqw%2Bpt6bUnUOXggj9NQvHmoXMyQrON6Rbx%2BXJsbwUlAPJxEgJ9hyimk6O%2BriqDcPYWW2nolQr3zsjNnM4l%2BSIxogRSpAuWbyUNOU3D8YSdo6DMhrYTPMUHX4hSpz1xTng5VqqI4biQVD1&X-Amz-Signature=fa0416c1ac85e14061d2fc76d5789e0369b1924cf8d7ac9e0d0c4b56bd1a89ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB56GWUX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXDnGI4jrSA2jrm1grwR%2Fon5UQ8Nl4HjLVhc%2FetvuYSAiBmQEKgosZ3z%2FtOEb%2F0T1Ww0gXICB5EJ90LdZOz85G4Sir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMmkvfHdH7qtGEIufZKtwDWHDdDY0smP9NZcAwhvIG0WVC72ZmD1Cg6KllhgECysRKwxXFfWN4Uph7aWCmpATyimbKX2ndg07zNtdXdm%2BcAo6zmAeJ%2FlWe2krFQrDk%2BIJlq9Aqll6OwVekDjqTBslNWVGKTP99klPIW6gg8svR8nHDIzzZLgR14WSURWoyFPSA5%2Bi2wyu3QDcVu6pNAozahjycxhLDZkRldhdXvV9Put8f2BSnGtQfmQlliXwoa%2BFqjWofc6x%2FqlEuihp%2FV4Moh1TMg723EVRB3PN9ugVA8UhXbJNTK31Sz%2FkMAijjBNbwlzndLC05cgtbeycDCKGchWlVp8ojeiF6Osf0Un8LmBhUM5d%2FaDJsEea60MacvuUyT8BeNp4f9KaqNDkLNenfWCP5XvyemUmBtKbim1iyh5YLcAeqQ3x9wVIPooGoumdmhDLSITpmFQocRMnffa4Zcr9rgQLW7XlsJBz7IpPiD%2F4UPQ6%2BjW0Ur0u0thzRZSuMJGVycL%2B1PZ8G%2BQtS4aZHX7rbpRZ9UcE4jEDZqzPlRB0M%2BAYJwByFVJNUPrunrrunoVVlZwPAslF866nQwG3kDC8ySvoZtjWeCIUlSEgC69ZYxxvy2ZHIjnORQlo%2BlCxHjE9UQOSgLUjXoiwwmLHmwAY6pgHcpGC5ligbV0BiIJvZoRL5boPI9%2FlvGww9b7hYnSvaOfJgJYW0BIGvv6fZ1uU663Ao3xH5Q96q%2FkKd3Y5%2Fqw%2Bpt6bUnUOXggj9NQvHmoXMyQrON6Rbx%2BXJsbwUlAPJxEgJ9hyimk6O%2BriqDcPYWW2nolQr3zsjNnM4l%2BSIxogRSpAuWbyUNOU3D8YSdo6DMhrYTPMUHX4hSpz1xTng5VqqI4biQVD1&X-Amz-Signature=9aa9e096819d629ac5c931e184b5db77ad598051a71a93bc4b525c91d7651e0e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB56GWUX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXDnGI4jrSA2jrm1grwR%2Fon5UQ8Nl4HjLVhc%2FetvuYSAiBmQEKgosZ3z%2FtOEb%2F0T1Ww0gXICB5EJ90LdZOz85G4Sir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMmkvfHdH7qtGEIufZKtwDWHDdDY0smP9NZcAwhvIG0WVC72ZmD1Cg6KllhgECysRKwxXFfWN4Uph7aWCmpATyimbKX2ndg07zNtdXdm%2BcAo6zmAeJ%2FlWe2krFQrDk%2BIJlq9Aqll6OwVekDjqTBslNWVGKTP99klPIW6gg8svR8nHDIzzZLgR14WSURWoyFPSA5%2Bi2wyu3QDcVu6pNAozahjycxhLDZkRldhdXvV9Put8f2BSnGtQfmQlliXwoa%2BFqjWofc6x%2FqlEuihp%2FV4Moh1TMg723EVRB3PN9ugVA8UhXbJNTK31Sz%2FkMAijjBNbwlzndLC05cgtbeycDCKGchWlVp8ojeiF6Osf0Un8LmBhUM5d%2FaDJsEea60MacvuUyT8BeNp4f9KaqNDkLNenfWCP5XvyemUmBtKbim1iyh5YLcAeqQ3x9wVIPooGoumdmhDLSITpmFQocRMnffa4Zcr9rgQLW7XlsJBz7IpPiD%2F4UPQ6%2BjW0Ur0u0thzRZSuMJGVycL%2B1PZ8G%2BQtS4aZHX7rbpRZ9UcE4jEDZqzPlRB0M%2BAYJwByFVJNUPrunrrunoVVlZwPAslF866nQwG3kDC8ySvoZtjWeCIUlSEgC69ZYxxvy2ZHIjnORQlo%2BlCxHjE9UQOSgLUjXoiwwmLHmwAY6pgHcpGC5ligbV0BiIJvZoRL5boPI9%2FlvGww9b7hYnSvaOfJgJYW0BIGvv6fZ1uU663Ao3xH5Q96q%2FkKd3Y5%2Fqw%2Bpt6bUnUOXggj9NQvHmoXMyQrON6Rbx%2BXJsbwUlAPJxEgJ9hyimk6O%2BriqDcPYWW2nolQr3zsjNnM4l%2BSIxogRSpAuWbyUNOU3D8YSdo6DMhrYTPMUHX4hSpz1xTng5VqqI4biQVD1&X-Amz-Signature=d84e6721cec37377cb0c28014779531371b753b43024f7114c6059e88720b5a2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB56GWUX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXDnGI4jrSA2jrm1grwR%2Fon5UQ8Nl4HjLVhc%2FetvuYSAiBmQEKgosZ3z%2FtOEb%2F0T1Ww0gXICB5EJ90LdZOz85G4Sir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMmkvfHdH7qtGEIufZKtwDWHDdDY0smP9NZcAwhvIG0WVC72ZmD1Cg6KllhgECysRKwxXFfWN4Uph7aWCmpATyimbKX2ndg07zNtdXdm%2BcAo6zmAeJ%2FlWe2krFQrDk%2BIJlq9Aqll6OwVekDjqTBslNWVGKTP99klPIW6gg8svR8nHDIzzZLgR14WSURWoyFPSA5%2Bi2wyu3QDcVu6pNAozahjycxhLDZkRldhdXvV9Put8f2BSnGtQfmQlliXwoa%2BFqjWofc6x%2FqlEuihp%2FV4Moh1TMg723EVRB3PN9ugVA8UhXbJNTK31Sz%2FkMAijjBNbwlzndLC05cgtbeycDCKGchWlVp8ojeiF6Osf0Un8LmBhUM5d%2FaDJsEea60MacvuUyT8BeNp4f9KaqNDkLNenfWCP5XvyemUmBtKbim1iyh5YLcAeqQ3x9wVIPooGoumdmhDLSITpmFQocRMnffa4Zcr9rgQLW7XlsJBz7IpPiD%2F4UPQ6%2BjW0Ur0u0thzRZSuMJGVycL%2B1PZ8G%2BQtS4aZHX7rbpRZ9UcE4jEDZqzPlRB0M%2BAYJwByFVJNUPrunrrunoVVlZwPAslF866nQwG3kDC8ySvoZtjWeCIUlSEgC69ZYxxvy2ZHIjnORQlo%2BlCxHjE9UQOSgLUjXoiwwmLHmwAY6pgHcpGC5ligbV0BiIJvZoRL5boPI9%2FlvGww9b7hYnSvaOfJgJYW0BIGvv6fZ1uU663Ao3xH5Q96q%2FkKd3Y5%2Fqw%2Bpt6bUnUOXggj9NQvHmoXMyQrON6Rbx%2BXJsbwUlAPJxEgJ9hyimk6O%2BriqDcPYWW2nolQr3zsjNnM4l%2BSIxogRSpAuWbyUNOU3D8YSdo6DMhrYTPMUHX4hSpz1xTng5VqqI4biQVD1&X-Amz-Signature=6a2631ebde101f906bca4a0b11b490a5df0af7bac5b9c04fd11bf128045d6b95&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB56GWUX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXDnGI4jrSA2jrm1grwR%2Fon5UQ8Nl4HjLVhc%2FetvuYSAiBmQEKgosZ3z%2FtOEb%2F0T1Ww0gXICB5EJ90LdZOz85G4Sir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMmkvfHdH7qtGEIufZKtwDWHDdDY0smP9NZcAwhvIG0WVC72ZmD1Cg6KllhgECysRKwxXFfWN4Uph7aWCmpATyimbKX2ndg07zNtdXdm%2BcAo6zmAeJ%2FlWe2krFQrDk%2BIJlq9Aqll6OwVekDjqTBslNWVGKTP99klPIW6gg8svR8nHDIzzZLgR14WSURWoyFPSA5%2Bi2wyu3QDcVu6pNAozahjycxhLDZkRldhdXvV9Put8f2BSnGtQfmQlliXwoa%2BFqjWofc6x%2FqlEuihp%2FV4Moh1TMg723EVRB3PN9ugVA8UhXbJNTK31Sz%2FkMAijjBNbwlzndLC05cgtbeycDCKGchWlVp8ojeiF6Osf0Un8LmBhUM5d%2FaDJsEea60MacvuUyT8BeNp4f9KaqNDkLNenfWCP5XvyemUmBtKbim1iyh5YLcAeqQ3x9wVIPooGoumdmhDLSITpmFQocRMnffa4Zcr9rgQLW7XlsJBz7IpPiD%2F4UPQ6%2BjW0Ur0u0thzRZSuMJGVycL%2B1PZ8G%2BQtS4aZHX7rbpRZ9UcE4jEDZqzPlRB0M%2BAYJwByFVJNUPrunrrunoVVlZwPAslF866nQwG3kDC8ySvoZtjWeCIUlSEgC69ZYxxvy2ZHIjnORQlo%2BlCxHjE9UQOSgLUjXoiwwmLHmwAY6pgHcpGC5ligbV0BiIJvZoRL5boPI9%2FlvGww9b7hYnSvaOfJgJYW0BIGvv6fZ1uU663Ao3xH5Q96q%2FkKd3Y5%2Fqw%2Bpt6bUnUOXggj9NQvHmoXMyQrON6Rbx%2BXJsbwUlAPJxEgJ9hyimk6O%2BriqDcPYWW2nolQr3zsjNnM4l%2BSIxogRSpAuWbyUNOU3D8YSdo6DMhrYTPMUHX4hSpz1xTng5VqqI4biQVD1&X-Amz-Signature=530a01ac214ee94c3d028dad3fcecec116aaed65aee41afb258b5b8856f2714b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB56GWUX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXDnGI4jrSA2jrm1grwR%2Fon5UQ8Nl4HjLVhc%2FetvuYSAiBmQEKgosZ3z%2FtOEb%2F0T1Ww0gXICB5EJ90LdZOz85G4Sir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMmkvfHdH7qtGEIufZKtwDWHDdDY0smP9NZcAwhvIG0WVC72ZmD1Cg6KllhgECysRKwxXFfWN4Uph7aWCmpATyimbKX2ndg07zNtdXdm%2BcAo6zmAeJ%2FlWe2krFQrDk%2BIJlq9Aqll6OwVekDjqTBslNWVGKTP99klPIW6gg8svR8nHDIzzZLgR14WSURWoyFPSA5%2Bi2wyu3QDcVu6pNAozahjycxhLDZkRldhdXvV9Put8f2BSnGtQfmQlliXwoa%2BFqjWofc6x%2FqlEuihp%2FV4Moh1TMg723EVRB3PN9ugVA8UhXbJNTK31Sz%2FkMAijjBNbwlzndLC05cgtbeycDCKGchWlVp8ojeiF6Osf0Un8LmBhUM5d%2FaDJsEea60MacvuUyT8BeNp4f9KaqNDkLNenfWCP5XvyemUmBtKbim1iyh5YLcAeqQ3x9wVIPooGoumdmhDLSITpmFQocRMnffa4Zcr9rgQLW7XlsJBz7IpPiD%2F4UPQ6%2BjW0Ur0u0thzRZSuMJGVycL%2B1PZ8G%2BQtS4aZHX7rbpRZ9UcE4jEDZqzPlRB0M%2BAYJwByFVJNUPrunrrunoVVlZwPAslF866nQwG3kDC8ySvoZtjWeCIUlSEgC69ZYxxvy2ZHIjnORQlo%2BlCxHjE9UQOSgLUjXoiwwmLHmwAY6pgHcpGC5ligbV0BiIJvZoRL5boPI9%2FlvGww9b7hYnSvaOfJgJYW0BIGvv6fZ1uU663Ao3xH5Q96q%2FkKd3Y5%2Fqw%2Bpt6bUnUOXggj9NQvHmoXMyQrON6Rbx%2BXJsbwUlAPJxEgJ9hyimk6O%2BriqDcPYWW2nolQr3zsjNnM4l%2BSIxogRSpAuWbyUNOU3D8YSdo6DMhrYTPMUHX4hSpz1xTng5VqqI4biQVD1&X-Amz-Signature=e0751325a1ff113e2469aee75c8552f7db1eeaab5cf0a0c1db9ecc45e5fa6210&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB56GWUX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXDnGI4jrSA2jrm1grwR%2Fon5UQ8Nl4HjLVhc%2FetvuYSAiBmQEKgosZ3z%2FtOEb%2F0T1Ww0gXICB5EJ90LdZOz85G4Sir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMmkvfHdH7qtGEIufZKtwDWHDdDY0smP9NZcAwhvIG0WVC72ZmD1Cg6KllhgECysRKwxXFfWN4Uph7aWCmpATyimbKX2ndg07zNtdXdm%2BcAo6zmAeJ%2FlWe2krFQrDk%2BIJlq9Aqll6OwVekDjqTBslNWVGKTP99klPIW6gg8svR8nHDIzzZLgR14WSURWoyFPSA5%2Bi2wyu3QDcVu6pNAozahjycxhLDZkRldhdXvV9Put8f2BSnGtQfmQlliXwoa%2BFqjWofc6x%2FqlEuihp%2FV4Moh1TMg723EVRB3PN9ugVA8UhXbJNTK31Sz%2FkMAijjBNbwlzndLC05cgtbeycDCKGchWlVp8ojeiF6Osf0Un8LmBhUM5d%2FaDJsEea60MacvuUyT8BeNp4f9KaqNDkLNenfWCP5XvyemUmBtKbim1iyh5YLcAeqQ3x9wVIPooGoumdmhDLSITpmFQocRMnffa4Zcr9rgQLW7XlsJBz7IpPiD%2F4UPQ6%2BjW0Ur0u0thzRZSuMJGVycL%2B1PZ8G%2BQtS4aZHX7rbpRZ9UcE4jEDZqzPlRB0M%2BAYJwByFVJNUPrunrrunoVVlZwPAslF866nQwG3kDC8ySvoZtjWeCIUlSEgC69ZYxxvy2ZHIjnORQlo%2BlCxHjE9UQOSgLUjXoiwwmLHmwAY6pgHcpGC5ligbV0BiIJvZoRL5boPI9%2FlvGww9b7hYnSvaOfJgJYW0BIGvv6fZ1uU663Ao3xH5Q96q%2FkKd3Y5%2Fqw%2Bpt6bUnUOXggj9NQvHmoXMyQrON6Rbx%2BXJsbwUlAPJxEgJ9hyimk6O%2BriqDcPYWW2nolQr3zsjNnM4l%2BSIxogRSpAuWbyUNOU3D8YSdo6DMhrYTPMUHX4hSpz1xTng5VqqI4biQVD1&X-Amz-Signature=4d3d5b8e66e10b5f1071ab8487fc9e8056603ba2bdd195d2918683a6c4f01605&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
