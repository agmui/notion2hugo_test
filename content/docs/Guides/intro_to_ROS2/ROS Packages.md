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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQG5A756%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICBs2AXGB8ksvKSVyC1SdzKvhcGxQ2dW7Ms4QA1Ki%2BiPAiACma7lXGm6E4sUTPH4bwjgsAkpm4cKvkqfqi%2BtQ4X%2FByr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMorv%2BuHf2lFmnjkcmKtwDlwOdxayepDAm14QfZe12S%2BsgopB0zeTA3BkA8fWErIYe6pGqoDmrOjjHf%2BcX0tjnhrFvhixgHRuhKOX%2FUaccEyKbwahoKoLcdEPNpfwipu0Apttlng1hsUebX6HWTZKONgxraXxf3AN%2BfjKY9F0EkDTlC5PZC2S%2BSvqm36TwT3mSABt2NyHLmqYtWfA1CiSzmfkjeavtzaRlk15nhiUluptH1BmvuwVqFDAAsPIoS6%2BZJUoTAjVTMRlult3JCkA4jlXgVRQ9Zm55KvEhmQ%2F%2BPVG7rH2i9GXAZO4btlUMoMx8QVd%2FfY6WsAndNFvi4lLl6lINkgf%2BVpD9y1Unn362tUDp%2BkLIZLQ24W6sgS7AAAvjhaqWn7vO7rCegMIi5mvM%2BAOuAVXe8Ft6qb4wX7Eqg%2FBJQ%2BkRvR7WxL6ePMIG%2Bd6Lwlbz%2FVFHSkQSqv%2F%2BpxrUUtyF0rEuu5XaTM4OuTQFWt2Tgs6KZg14d6Md%2BLnUf0qte2HkFbYUaEdeuIPR1meWz%2FThJZWpsQzQdpmj%2B%2Bi%2FSkDCn1TBtXr0XBecTuVVrJmB6wC7r6orR78KoKnd6vGYL9e42gtte2YkrCSPzgPLF5HRjfj%2FMi%2F3DRf%2FM%2F8qgxu0cNQ7s2ia3hjRMmQw0NbnwgY6pgGxcc4jRLdwx8PkPvOIl1I7PeV969y1bFXN1nTzx%2Baaa5eLa0af3q5rIKMoKKHvdJr2v02Gt%2FuJNKYQSa2RsYyCpbf0egtj06HAHKAeX20frVs91uscrcxVD3RQE4g6w1f12y3r8mELzElq%2FKwI8XaS0LriRaYOmlfVHAuKPnzVyw3N3Ycv1Bg9UivXgiWbPSv4puvnJX9sC5a610gxU61sNKyKc2h4&X-Amz-Signature=6a41aeeba70a8ff165cec2a12eaba22685074c14f75b8204ba5de1e6db0539fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQG5A756%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICBs2AXGB8ksvKSVyC1SdzKvhcGxQ2dW7Ms4QA1Ki%2BiPAiACma7lXGm6E4sUTPH4bwjgsAkpm4cKvkqfqi%2BtQ4X%2FByr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMorv%2BuHf2lFmnjkcmKtwDlwOdxayepDAm14QfZe12S%2BsgopB0zeTA3BkA8fWErIYe6pGqoDmrOjjHf%2BcX0tjnhrFvhixgHRuhKOX%2FUaccEyKbwahoKoLcdEPNpfwipu0Apttlng1hsUebX6HWTZKONgxraXxf3AN%2BfjKY9F0EkDTlC5PZC2S%2BSvqm36TwT3mSABt2NyHLmqYtWfA1CiSzmfkjeavtzaRlk15nhiUluptH1BmvuwVqFDAAsPIoS6%2BZJUoTAjVTMRlult3JCkA4jlXgVRQ9Zm55KvEhmQ%2F%2BPVG7rH2i9GXAZO4btlUMoMx8QVd%2FfY6WsAndNFvi4lLl6lINkgf%2BVpD9y1Unn362tUDp%2BkLIZLQ24W6sgS7AAAvjhaqWn7vO7rCegMIi5mvM%2BAOuAVXe8Ft6qb4wX7Eqg%2FBJQ%2BkRvR7WxL6ePMIG%2Bd6Lwlbz%2FVFHSkQSqv%2F%2BpxrUUtyF0rEuu5XaTM4OuTQFWt2Tgs6KZg14d6Md%2BLnUf0qte2HkFbYUaEdeuIPR1meWz%2FThJZWpsQzQdpmj%2B%2Bi%2FSkDCn1TBtXr0XBecTuVVrJmB6wC7r6orR78KoKnd6vGYL9e42gtte2YkrCSPzgPLF5HRjfj%2FMi%2F3DRf%2FM%2F8qgxu0cNQ7s2ia3hjRMmQw0NbnwgY6pgGxcc4jRLdwx8PkPvOIl1I7PeV969y1bFXN1nTzx%2Baaa5eLa0af3q5rIKMoKKHvdJr2v02Gt%2FuJNKYQSa2RsYyCpbf0egtj06HAHKAeX20frVs91uscrcxVD3RQE4g6w1f12y3r8mELzElq%2FKwI8XaS0LriRaYOmlfVHAuKPnzVyw3N3Ycv1Bg9UivXgiWbPSv4puvnJX9sC5a610gxU61sNKyKc2h4&X-Amz-Signature=5d6b8497655efc567d5dac8f69d3ca5c9d4e7b0e4d8b460c7960ad28ba21152b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQG5A756%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICBs2AXGB8ksvKSVyC1SdzKvhcGxQ2dW7Ms4QA1Ki%2BiPAiACma7lXGm6E4sUTPH4bwjgsAkpm4cKvkqfqi%2BtQ4X%2FByr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMorv%2BuHf2lFmnjkcmKtwDlwOdxayepDAm14QfZe12S%2BsgopB0zeTA3BkA8fWErIYe6pGqoDmrOjjHf%2BcX0tjnhrFvhixgHRuhKOX%2FUaccEyKbwahoKoLcdEPNpfwipu0Apttlng1hsUebX6HWTZKONgxraXxf3AN%2BfjKY9F0EkDTlC5PZC2S%2BSvqm36TwT3mSABt2NyHLmqYtWfA1CiSzmfkjeavtzaRlk15nhiUluptH1BmvuwVqFDAAsPIoS6%2BZJUoTAjVTMRlult3JCkA4jlXgVRQ9Zm55KvEhmQ%2F%2BPVG7rH2i9GXAZO4btlUMoMx8QVd%2FfY6WsAndNFvi4lLl6lINkgf%2BVpD9y1Unn362tUDp%2BkLIZLQ24W6sgS7AAAvjhaqWn7vO7rCegMIi5mvM%2BAOuAVXe8Ft6qb4wX7Eqg%2FBJQ%2BkRvR7WxL6ePMIG%2Bd6Lwlbz%2FVFHSkQSqv%2F%2BpxrUUtyF0rEuu5XaTM4OuTQFWt2Tgs6KZg14d6Md%2BLnUf0qte2HkFbYUaEdeuIPR1meWz%2FThJZWpsQzQdpmj%2B%2Bi%2FSkDCn1TBtXr0XBecTuVVrJmB6wC7r6orR78KoKnd6vGYL9e42gtte2YkrCSPzgPLF5HRjfj%2FMi%2F3DRf%2FM%2F8qgxu0cNQ7s2ia3hjRMmQw0NbnwgY6pgGxcc4jRLdwx8PkPvOIl1I7PeV969y1bFXN1nTzx%2Baaa5eLa0af3q5rIKMoKKHvdJr2v02Gt%2FuJNKYQSa2RsYyCpbf0egtj06HAHKAeX20frVs91uscrcxVD3RQE4g6w1f12y3r8mELzElq%2FKwI8XaS0LriRaYOmlfVHAuKPnzVyw3N3Ycv1Bg9UivXgiWbPSv4puvnJX9sC5a610gxU61sNKyKc2h4&X-Amz-Signature=6cd2e02cbad5a3bb297664b8d9329a3ba2de3f2e0eeed0cf2a849eccea3987fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQG5A756%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICBs2AXGB8ksvKSVyC1SdzKvhcGxQ2dW7Ms4QA1Ki%2BiPAiACma7lXGm6E4sUTPH4bwjgsAkpm4cKvkqfqi%2BtQ4X%2FByr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMorv%2BuHf2lFmnjkcmKtwDlwOdxayepDAm14QfZe12S%2BsgopB0zeTA3BkA8fWErIYe6pGqoDmrOjjHf%2BcX0tjnhrFvhixgHRuhKOX%2FUaccEyKbwahoKoLcdEPNpfwipu0Apttlng1hsUebX6HWTZKONgxraXxf3AN%2BfjKY9F0EkDTlC5PZC2S%2BSvqm36TwT3mSABt2NyHLmqYtWfA1CiSzmfkjeavtzaRlk15nhiUluptH1BmvuwVqFDAAsPIoS6%2BZJUoTAjVTMRlult3JCkA4jlXgVRQ9Zm55KvEhmQ%2F%2BPVG7rH2i9GXAZO4btlUMoMx8QVd%2FfY6WsAndNFvi4lLl6lINkgf%2BVpD9y1Unn362tUDp%2BkLIZLQ24W6sgS7AAAvjhaqWn7vO7rCegMIi5mvM%2BAOuAVXe8Ft6qb4wX7Eqg%2FBJQ%2BkRvR7WxL6ePMIG%2Bd6Lwlbz%2FVFHSkQSqv%2F%2BpxrUUtyF0rEuu5XaTM4OuTQFWt2Tgs6KZg14d6Md%2BLnUf0qte2HkFbYUaEdeuIPR1meWz%2FThJZWpsQzQdpmj%2B%2Bi%2FSkDCn1TBtXr0XBecTuVVrJmB6wC7r6orR78KoKnd6vGYL9e42gtte2YkrCSPzgPLF5HRjfj%2FMi%2F3DRf%2FM%2F8qgxu0cNQ7s2ia3hjRMmQw0NbnwgY6pgGxcc4jRLdwx8PkPvOIl1I7PeV969y1bFXN1nTzx%2Baaa5eLa0af3q5rIKMoKKHvdJr2v02Gt%2FuJNKYQSa2RsYyCpbf0egtj06HAHKAeX20frVs91uscrcxVD3RQE4g6w1f12y3r8mELzElq%2FKwI8XaS0LriRaYOmlfVHAuKPnzVyw3N3Ycv1Bg9UivXgiWbPSv4puvnJX9sC5a610gxU61sNKyKc2h4&X-Amz-Signature=6c27db2537d4603064b56df8bad91e5c70c6b8f08e28c2ddbcf7fec10992062e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQG5A756%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICBs2AXGB8ksvKSVyC1SdzKvhcGxQ2dW7Ms4QA1Ki%2BiPAiACma7lXGm6E4sUTPH4bwjgsAkpm4cKvkqfqi%2BtQ4X%2FByr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMorv%2BuHf2lFmnjkcmKtwDlwOdxayepDAm14QfZe12S%2BsgopB0zeTA3BkA8fWErIYe6pGqoDmrOjjHf%2BcX0tjnhrFvhixgHRuhKOX%2FUaccEyKbwahoKoLcdEPNpfwipu0Apttlng1hsUebX6HWTZKONgxraXxf3AN%2BfjKY9F0EkDTlC5PZC2S%2BSvqm36TwT3mSABt2NyHLmqYtWfA1CiSzmfkjeavtzaRlk15nhiUluptH1BmvuwVqFDAAsPIoS6%2BZJUoTAjVTMRlult3JCkA4jlXgVRQ9Zm55KvEhmQ%2F%2BPVG7rH2i9GXAZO4btlUMoMx8QVd%2FfY6WsAndNFvi4lLl6lINkgf%2BVpD9y1Unn362tUDp%2BkLIZLQ24W6sgS7AAAvjhaqWn7vO7rCegMIi5mvM%2BAOuAVXe8Ft6qb4wX7Eqg%2FBJQ%2BkRvR7WxL6ePMIG%2Bd6Lwlbz%2FVFHSkQSqv%2F%2BpxrUUtyF0rEuu5XaTM4OuTQFWt2Tgs6KZg14d6Md%2BLnUf0qte2HkFbYUaEdeuIPR1meWz%2FThJZWpsQzQdpmj%2B%2Bi%2FSkDCn1TBtXr0XBecTuVVrJmB6wC7r6orR78KoKnd6vGYL9e42gtte2YkrCSPzgPLF5HRjfj%2FMi%2F3DRf%2FM%2F8qgxu0cNQ7s2ia3hjRMmQw0NbnwgY6pgGxcc4jRLdwx8PkPvOIl1I7PeV969y1bFXN1nTzx%2Baaa5eLa0af3q5rIKMoKKHvdJr2v02Gt%2FuJNKYQSa2RsYyCpbf0egtj06HAHKAeX20frVs91uscrcxVD3RQE4g6w1f12y3r8mELzElq%2FKwI8XaS0LriRaYOmlfVHAuKPnzVyw3N3Ycv1Bg9UivXgiWbPSv4puvnJX9sC5a610gxU61sNKyKc2h4&X-Amz-Signature=153cf214b01922a70aabe42d33a3bd38714b597f75abb50990724e939bae8a45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQG5A756%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICBs2AXGB8ksvKSVyC1SdzKvhcGxQ2dW7Ms4QA1Ki%2BiPAiACma7lXGm6E4sUTPH4bwjgsAkpm4cKvkqfqi%2BtQ4X%2FByr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMorv%2BuHf2lFmnjkcmKtwDlwOdxayepDAm14QfZe12S%2BsgopB0zeTA3BkA8fWErIYe6pGqoDmrOjjHf%2BcX0tjnhrFvhixgHRuhKOX%2FUaccEyKbwahoKoLcdEPNpfwipu0Apttlng1hsUebX6HWTZKONgxraXxf3AN%2BfjKY9F0EkDTlC5PZC2S%2BSvqm36TwT3mSABt2NyHLmqYtWfA1CiSzmfkjeavtzaRlk15nhiUluptH1BmvuwVqFDAAsPIoS6%2BZJUoTAjVTMRlult3JCkA4jlXgVRQ9Zm55KvEhmQ%2F%2BPVG7rH2i9GXAZO4btlUMoMx8QVd%2FfY6WsAndNFvi4lLl6lINkgf%2BVpD9y1Unn362tUDp%2BkLIZLQ24W6sgS7AAAvjhaqWn7vO7rCegMIi5mvM%2BAOuAVXe8Ft6qb4wX7Eqg%2FBJQ%2BkRvR7WxL6ePMIG%2Bd6Lwlbz%2FVFHSkQSqv%2F%2BpxrUUtyF0rEuu5XaTM4OuTQFWt2Tgs6KZg14d6Md%2BLnUf0qte2HkFbYUaEdeuIPR1meWz%2FThJZWpsQzQdpmj%2B%2Bi%2FSkDCn1TBtXr0XBecTuVVrJmB6wC7r6orR78KoKnd6vGYL9e42gtte2YkrCSPzgPLF5HRjfj%2FMi%2F3DRf%2FM%2F8qgxu0cNQ7s2ia3hjRMmQw0NbnwgY6pgGxcc4jRLdwx8PkPvOIl1I7PeV969y1bFXN1nTzx%2Baaa5eLa0af3q5rIKMoKKHvdJr2v02Gt%2FuJNKYQSa2RsYyCpbf0egtj06HAHKAeX20frVs91uscrcxVD3RQE4g6w1f12y3r8mELzElq%2FKwI8XaS0LriRaYOmlfVHAuKPnzVyw3N3Ycv1Bg9UivXgiWbPSv4puvnJX9sC5a610gxU61sNKyKc2h4&X-Amz-Signature=994e9d5916dcbd8bf9479df347e9a3fea06305cd9e346ef93d65f88e368e67ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQG5A756%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICBs2AXGB8ksvKSVyC1SdzKvhcGxQ2dW7Ms4QA1Ki%2BiPAiACma7lXGm6E4sUTPH4bwjgsAkpm4cKvkqfqi%2BtQ4X%2FByr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMorv%2BuHf2lFmnjkcmKtwDlwOdxayepDAm14QfZe12S%2BsgopB0zeTA3BkA8fWErIYe6pGqoDmrOjjHf%2BcX0tjnhrFvhixgHRuhKOX%2FUaccEyKbwahoKoLcdEPNpfwipu0Apttlng1hsUebX6HWTZKONgxraXxf3AN%2BfjKY9F0EkDTlC5PZC2S%2BSvqm36TwT3mSABt2NyHLmqYtWfA1CiSzmfkjeavtzaRlk15nhiUluptH1BmvuwVqFDAAsPIoS6%2BZJUoTAjVTMRlult3JCkA4jlXgVRQ9Zm55KvEhmQ%2F%2BPVG7rH2i9GXAZO4btlUMoMx8QVd%2FfY6WsAndNFvi4lLl6lINkgf%2BVpD9y1Unn362tUDp%2BkLIZLQ24W6sgS7AAAvjhaqWn7vO7rCegMIi5mvM%2BAOuAVXe8Ft6qb4wX7Eqg%2FBJQ%2BkRvR7WxL6ePMIG%2Bd6Lwlbz%2FVFHSkQSqv%2F%2BpxrUUtyF0rEuu5XaTM4OuTQFWt2Tgs6KZg14d6Md%2BLnUf0qte2HkFbYUaEdeuIPR1meWz%2FThJZWpsQzQdpmj%2B%2Bi%2FSkDCn1TBtXr0XBecTuVVrJmB6wC7r6orR78KoKnd6vGYL9e42gtte2YkrCSPzgPLF5HRjfj%2FMi%2F3DRf%2FM%2F8qgxu0cNQ7s2ia3hjRMmQw0NbnwgY6pgGxcc4jRLdwx8PkPvOIl1I7PeV969y1bFXN1nTzx%2Baaa5eLa0af3q5rIKMoKKHvdJr2v02Gt%2FuJNKYQSa2RsYyCpbf0egtj06HAHKAeX20frVs91uscrcxVD3RQE4g6w1f12y3r8mELzElq%2FKwI8XaS0LriRaYOmlfVHAuKPnzVyw3N3Ycv1Bg9UivXgiWbPSv4puvnJX9sC5a610gxU61sNKyKc2h4&X-Amz-Signature=fc08393fbc0a551f912b5de153a2655756ecde2a73b6bbb4b5de175dface0ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
