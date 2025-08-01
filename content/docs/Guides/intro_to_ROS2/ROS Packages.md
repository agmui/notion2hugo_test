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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3EBJRR3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYnN1a9JXAN4S2a8fDifl%2FLTIHBFmGvEZrnEIxK1R7sQIhAM9MvIK5GMohuKoHETkq9WTpB9ptjl8qtuqJhdGpnvWsKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxln3NBA8i440OfVlwq3APfq1BujTvLqT9s6fnXDy0zQUaBLsGKrt1pzAGcHe%2FWkTteBBAgUCEU3yX7%2Bu0CZjDKsmPFvnBAdsTBmxw212fxTWhiLK7zEcPPPkEWdUz92ZfVyaQWU8%2FYFk5pItH20Mr4JPUqvo%2B4PmpurFAJCxXutFKJW3sz%2BhhLXFwetEiK54jtovEkT1hlSnMSs7kQONucj1%2BOinaauVF7QiQoj0rV4b5q0nyEFGcEmWWV1PDZZ3I5YoDtLljG4uxbosn7tk%2F9glnCuPyfNB1ibUObpXAuLnc0MsEcmDFO6J0eLuiRhgld2tGimfTbx3uxgkT9fOVz1f%2FS2era93jAYYcEWl7JIzDHHRhFHXKCenVRc4DDPYS5p6tns4beUINxXerPDTedUSGefZ9%2FM8r%2Fe%2FU31rh5DJBLxFnCvYeOX5%2Bg5GX4dr1%2FSRxhVpdTp2qxe6sOvBOWZSzsCzobYEdku3wfxTO71nuNYHk4iG3Z%2FtfhcJT1x0uIp3LAcnnouIQPTe1Byx9Ws5lshR%2FknCfWdcrCOOwxL8WzaAH%2BLia5PtbT0%2BNVj4Vm8%2Barz9im%2BTBUTIcNPzkTsbi28z%2B1qAqKj9H6UjNYH9bCIArGPnf8V4a%2FgZTBXGaSN8G%2BR%2B3zgX0ROTDP%2BrPEBjqkARY%2BNEaw4ZYizF0PqMuFietczwUXP0WiR9wuoFeM14cB98KStk%2F5SfE2x%2Faq2avtMvI6HLr8OtWn64POh5ztYZuKzUe896MjAZrxi5IDGHj7Nxww%2BLfxVE66XWWdT45RNdG7G19nAmLbsq7e9JCNxGhHXpTy8%2Fy3d5bfyZ9hSagSUXk4v89ei6xswglbIWEukyAAOUOZ2KJo39iZazzQSK2uNltx&X-Amz-Signature=1ec420e7094fd7d7389d9b7085b21bd4b8d79c0be3a0f2749c799198b452665e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3EBJRR3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYnN1a9JXAN4S2a8fDifl%2FLTIHBFmGvEZrnEIxK1R7sQIhAM9MvIK5GMohuKoHETkq9WTpB9ptjl8qtuqJhdGpnvWsKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxln3NBA8i440OfVlwq3APfq1BujTvLqT9s6fnXDy0zQUaBLsGKrt1pzAGcHe%2FWkTteBBAgUCEU3yX7%2Bu0CZjDKsmPFvnBAdsTBmxw212fxTWhiLK7zEcPPPkEWdUz92ZfVyaQWU8%2FYFk5pItH20Mr4JPUqvo%2B4PmpurFAJCxXutFKJW3sz%2BhhLXFwetEiK54jtovEkT1hlSnMSs7kQONucj1%2BOinaauVF7QiQoj0rV4b5q0nyEFGcEmWWV1PDZZ3I5YoDtLljG4uxbosn7tk%2F9glnCuPyfNB1ibUObpXAuLnc0MsEcmDFO6J0eLuiRhgld2tGimfTbx3uxgkT9fOVz1f%2FS2era93jAYYcEWl7JIzDHHRhFHXKCenVRc4DDPYS5p6tns4beUINxXerPDTedUSGefZ9%2FM8r%2Fe%2FU31rh5DJBLxFnCvYeOX5%2Bg5GX4dr1%2FSRxhVpdTp2qxe6sOvBOWZSzsCzobYEdku3wfxTO71nuNYHk4iG3Z%2FtfhcJT1x0uIp3LAcnnouIQPTe1Byx9Ws5lshR%2FknCfWdcrCOOwxL8WzaAH%2BLia5PtbT0%2BNVj4Vm8%2Barz9im%2BTBUTIcNPzkTsbi28z%2B1qAqKj9H6UjNYH9bCIArGPnf8V4a%2FgZTBXGaSN8G%2BR%2B3zgX0ROTDP%2BrPEBjqkARY%2BNEaw4ZYizF0PqMuFietczwUXP0WiR9wuoFeM14cB98KStk%2F5SfE2x%2Faq2avtMvI6HLr8OtWn64POh5ztYZuKzUe896MjAZrxi5IDGHj7Nxww%2BLfxVE66XWWdT45RNdG7G19nAmLbsq7e9JCNxGhHXpTy8%2Fy3d5bfyZ9hSagSUXk4v89ei6xswglbIWEukyAAOUOZ2KJo39iZazzQSK2uNltx&X-Amz-Signature=9f093771bfb0a61ddf8b547a443e061d651fd22b39952d46e5c6839620eafd92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3EBJRR3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYnN1a9JXAN4S2a8fDifl%2FLTIHBFmGvEZrnEIxK1R7sQIhAM9MvIK5GMohuKoHETkq9WTpB9ptjl8qtuqJhdGpnvWsKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxln3NBA8i440OfVlwq3APfq1BujTvLqT9s6fnXDy0zQUaBLsGKrt1pzAGcHe%2FWkTteBBAgUCEU3yX7%2Bu0CZjDKsmPFvnBAdsTBmxw212fxTWhiLK7zEcPPPkEWdUz92ZfVyaQWU8%2FYFk5pItH20Mr4JPUqvo%2B4PmpurFAJCxXutFKJW3sz%2BhhLXFwetEiK54jtovEkT1hlSnMSs7kQONucj1%2BOinaauVF7QiQoj0rV4b5q0nyEFGcEmWWV1PDZZ3I5YoDtLljG4uxbosn7tk%2F9glnCuPyfNB1ibUObpXAuLnc0MsEcmDFO6J0eLuiRhgld2tGimfTbx3uxgkT9fOVz1f%2FS2era93jAYYcEWl7JIzDHHRhFHXKCenVRc4DDPYS5p6tns4beUINxXerPDTedUSGefZ9%2FM8r%2Fe%2FU31rh5DJBLxFnCvYeOX5%2Bg5GX4dr1%2FSRxhVpdTp2qxe6sOvBOWZSzsCzobYEdku3wfxTO71nuNYHk4iG3Z%2FtfhcJT1x0uIp3LAcnnouIQPTe1Byx9Ws5lshR%2FknCfWdcrCOOwxL8WzaAH%2BLia5PtbT0%2BNVj4Vm8%2Barz9im%2BTBUTIcNPzkTsbi28z%2B1qAqKj9H6UjNYH9bCIArGPnf8V4a%2FgZTBXGaSN8G%2BR%2B3zgX0ROTDP%2BrPEBjqkARY%2BNEaw4ZYizF0PqMuFietczwUXP0WiR9wuoFeM14cB98KStk%2F5SfE2x%2Faq2avtMvI6HLr8OtWn64POh5ztYZuKzUe896MjAZrxi5IDGHj7Nxww%2BLfxVE66XWWdT45RNdG7G19nAmLbsq7e9JCNxGhHXpTy8%2Fy3d5bfyZ9hSagSUXk4v89ei6xswglbIWEukyAAOUOZ2KJo39iZazzQSK2uNltx&X-Amz-Signature=0ecf8d1db5123434ee8fff84e08a31e58c5ac28346a1bde3f62a9f3d8a3675b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3EBJRR3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYnN1a9JXAN4S2a8fDifl%2FLTIHBFmGvEZrnEIxK1R7sQIhAM9MvIK5GMohuKoHETkq9WTpB9ptjl8qtuqJhdGpnvWsKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxln3NBA8i440OfVlwq3APfq1BujTvLqT9s6fnXDy0zQUaBLsGKrt1pzAGcHe%2FWkTteBBAgUCEU3yX7%2Bu0CZjDKsmPFvnBAdsTBmxw212fxTWhiLK7zEcPPPkEWdUz92ZfVyaQWU8%2FYFk5pItH20Mr4JPUqvo%2B4PmpurFAJCxXutFKJW3sz%2BhhLXFwetEiK54jtovEkT1hlSnMSs7kQONucj1%2BOinaauVF7QiQoj0rV4b5q0nyEFGcEmWWV1PDZZ3I5YoDtLljG4uxbosn7tk%2F9glnCuPyfNB1ibUObpXAuLnc0MsEcmDFO6J0eLuiRhgld2tGimfTbx3uxgkT9fOVz1f%2FS2era93jAYYcEWl7JIzDHHRhFHXKCenVRc4DDPYS5p6tns4beUINxXerPDTedUSGefZ9%2FM8r%2Fe%2FU31rh5DJBLxFnCvYeOX5%2Bg5GX4dr1%2FSRxhVpdTp2qxe6sOvBOWZSzsCzobYEdku3wfxTO71nuNYHk4iG3Z%2FtfhcJT1x0uIp3LAcnnouIQPTe1Byx9Ws5lshR%2FknCfWdcrCOOwxL8WzaAH%2BLia5PtbT0%2BNVj4Vm8%2Barz9im%2BTBUTIcNPzkTsbi28z%2B1qAqKj9H6UjNYH9bCIArGPnf8V4a%2FgZTBXGaSN8G%2BR%2B3zgX0ROTDP%2BrPEBjqkARY%2BNEaw4ZYizF0PqMuFietczwUXP0WiR9wuoFeM14cB98KStk%2F5SfE2x%2Faq2avtMvI6HLr8OtWn64POh5ztYZuKzUe896MjAZrxi5IDGHj7Nxww%2BLfxVE66XWWdT45RNdG7G19nAmLbsq7e9JCNxGhHXpTy8%2Fy3d5bfyZ9hSagSUXk4v89ei6xswglbIWEukyAAOUOZ2KJo39iZazzQSK2uNltx&X-Amz-Signature=e72f5e071717e446becb331d3d7846046231840bef47371711e742b3e2b85435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3EBJRR3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYnN1a9JXAN4S2a8fDifl%2FLTIHBFmGvEZrnEIxK1R7sQIhAM9MvIK5GMohuKoHETkq9WTpB9ptjl8qtuqJhdGpnvWsKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxln3NBA8i440OfVlwq3APfq1BujTvLqT9s6fnXDy0zQUaBLsGKrt1pzAGcHe%2FWkTteBBAgUCEU3yX7%2Bu0CZjDKsmPFvnBAdsTBmxw212fxTWhiLK7zEcPPPkEWdUz92ZfVyaQWU8%2FYFk5pItH20Mr4JPUqvo%2B4PmpurFAJCxXutFKJW3sz%2BhhLXFwetEiK54jtovEkT1hlSnMSs7kQONucj1%2BOinaauVF7QiQoj0rV4b5q0nyEFGcEmWWV1PDZZ3I5YoDtLljG4uxbosn7tk%2F9glnCuPyfNB1ibUObpXAuLnc0MsEcmDFO6J0eLuiRhgld2tGimfTbx3uxgkT9fOVz1f%2FS2era93jAYYcEWl7JIzDHHRhFHXKCenVRc4DDPYS5p6tns4beUINxXerPDTedUSGefZ9%2FM8r%2Fe%2FU31rh5DJBLxFnCvYeOX5%2Bg5GX4dr1%2FSRxhVpdTp2qxe6sOvBOWZSzsCzobYEdku3wfxTO71nuNYHk4iG3Z%2FtfhcJT1x0uIp3LAcnnouIQPTe1Byx9Ws5lshR%2FknCfWdcrCOOwxL8WzaAH%2BLia5PtbT0%2BNVj4Vm8%2Barz9im%2BTBUTIcNPzkTsbi28z%2B1qAqKj9H6UjNYH9bCIArGPnf8V4a%2FgZTBXGaSN8G%2BR%2B3zgX0ROTDP%2BrPEBjqkARY%2BNEaw4ZYizF0PqMuFietczwUXP0WiR9wuoFeM14cB98KStk%2F5SfE2x%2Faq2avtMvI6HLr8OtWn64POh5ztYZuKzUe896MjAZrxi5IDGHj7Nxww%2BLfxVE66XWWdT45RNdG7G19nAmLbsq7e9JCNxGhHXpTy8%2Fy3d5bfyZ9hSagSUXk4v89ei6xswglbIWEukyAAOUOZ2KJo39iZazzQSK2uNltx&X-Amz-Signature=d641b0c9e0815d60f073e202346547a31962e4a1db70386a5a7228a496648b86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3EBJRR3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYnN1a9JXAN4S2a8fDifl%2FLTIHBFmGvEZrnEIxK1R7sQIhAM9MvIK5GMohuKoHETkq9WTpB9ptjl8qtuqJhdGpnvWsKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxln3NBA8i440OfVlwq3APfq1BujTvLqT9s6fnXDy0zQUaBLsGKrt1pzAGcHe%2FWkTteBBAgUCEU3yX7%2Bu0CZjDKsmPFvnBAdsTBmxw212fxTWhiLK7zEcPPPkEWdUz92ZfVyaQWU8%2FYFk5pItH20Mr4JPUqvo%2B4PmpurFAJCxXutFKJW3sz%2BhhLXFwetEiK54jtovEkT1hlSnMSs7kQONucj1%2BOinaauVF7QiQoj0rV4b5q0nyEFGcEmWWV1PDZZ3I5YoDtLljG4uxbosn7tk%2F9glnCuPyfNB1ibUObpXAuLnc0MsEcmDFO6J0eLuiRhgld2tGimfTbx3uxgkT9fOVz1f%2FS2era93jAYYcEWl7JIzDHHRhFHXKCenVRc4DDPYS5p6tns4beUINxXerPDTedUSGefZ9%2FM8r%2Fe%2FU31rh5DJBLxFnCvYeOX5%2Bg5GX4dr1%2FSRxhVpdTp2qxe6sOvBOWZSzsCzobYEdku3wfxTO71nuNYHk4iG3Z%2FtfhcJT1x0uIp3LAcnnouIQPTe1Byx9Ws5lshR%2FknCfWdcrCOOwxL8WzaAH%2BLia5PtbT0%2BNVj4Vm8%2Barz9im%2BTBUTIcNPzkTsbi28z%2B1qAqKj9H6UjNYH9bCIArGPnf8V4a%2FgZTBXGaSN8G%2BR%2B3zgX0ROTDP%2BrPEBjqkARY%2BNEaw4ZYizF0PqMuFietczwUXP0WiR9wuoFeM14cB98KStk%2F5SfE2x%2Faq2avtMvI6HLr8OtWn64POh5ztYZuKzUe896MjAZrxi5IDGHj7Nxww%2BLfxVE66XWWdT45RNdG7G19nAmLbsq7e9JCNxGhHXpTy8%2Fy3d5bfyZ9hSagSUXk4v89ei6xswglbIWEukyAAOUOZ2KJo39iZazzQSK2uNltx&X-Amz-Signature=0ace7de731c89e6d4cd436b10f1bb82085fca0aa7540a6aa32a5ddeded96d8c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3EBJRR3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYnN1a9JXAN4S2a8fDifl%2FLTIHBFmGvEZrnEIxK1R7sQIhAM9MvIK5GMohuKoHETkq9WTpB9ptjl8qtuqJhdGpnvWsKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxln3NBA8i440OfVlwq3APfq1BujTvLqT9s6fnXDy0zQUaBLsGKrt1pzAGcHe%2FWkTteBBAgUCEU3yX7%2Bu0CZjDKsmPFvnBAdsTBmxw212fxTWhiLK7zEcPPPkEWdUz92ZfVyaQWU8%2FYFk5pItH20Mr4JPUqvo%2B4PmpurFAJCxXutFKJW3sz%2BhhLXFwetEiK54jtovEkT1hlSnMSs7kQONucj1%2BOinaauVF7QiQoj0rV4b5q0nyEFGcEmWWV1PDZZ3I5YoDtLljG4uxbosn7tk%2F9glnCuPyfNB1ibUObpXAuLnc0MsEcmDFO6J0eLuiRhgld2tGimfTbx3uxgkT9fOVz1f%2FS2era93jAYYcEWl7JIzDHHRhFHXKCenVRc4DDPYS5p6tns4beUINxXerPDTedUSGefZ9%2FM8r%2Fe%2FU31rh5DJBLxFnCvYeOX5%2Bg5GX4dr1%2FSRxhVpdTp2qxe6sOvBOWZSzsCzobYEdku3wfxTO71nuNYHk4iG3Z%2FtfhcJT1x0uIp3LAcnnouIQPTe1Byx9Ws5lshR%2FknCfWdcrCOOwxL8WzaAH%2BLia5PtbT0%2BNVj4Vm8%2Barz9im%2BTBUTIcNPzkTsbi28z%2B1qAqKj9H6UjNYH9bCIArGPnf8V4a%2FgZTBXGaSN8G%2BR%2B3zgX0ROTDP%2BrPEBjqkARY%2BNEaw4ZYizF0PqMuFietczwUXP0WiR9wuoFeM14cB98KStk%2F5SfE2x%2Faq2avtMvI6HLr8OtWn64POh5ztYZuKzUe896MjAZrxi5IDGHj7Nxww%2BLfxVE66XWWdT45RNdG7G19nAmLbsq7e9JCNxGhHXpTy8%2Fy3d5bfyZ9hSagSUXk4v89ei6xswglbIWEukyAAOUOZ2KJo39iZazzQSK2uNltx&X-Amz-Signature=a291791cb0a25e139c4968e4dcf2ac6d569b191dc57163c43b467efad72cd585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
