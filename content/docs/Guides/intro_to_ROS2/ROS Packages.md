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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U3YI66O%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCB6n23MakU%2FTxAuLe6XO7vMDXcwmMS6t4WvKjvAcmfAiEAuLKN8ucWRh%2B9VktHSDk4mmZpgthU5kvxQ0zDtoV3QqAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDC4CToNoIgwOsj1XRyrcA0KQg59aP3ejP8IT18vSrTrCJalF6fQD80cKuzl%2B8ZUbfeLl39mUhdRTwT15yGrhLp3dyWcNI9hBIDaCRA7cht16iZw%2BXHPNglAukjlcCTZhA5phUe%2FGbMTs59KkqkUZvw1us0%2FOPMiyzQoL8l1qCIW8nA8DkEWFt8hP5bQcqxaJMUGRpc0VbEiVC8DImxdkfQmVdpTZUQwwXWpt%2FLEFSgo7bF%2BEASkctF1hkKeDcQT%2BdIjg079F7EelbiEtLGvCkdrRiw8qdRtYsVHMU1alqNB0no6CjpdJWy26fokqWaOxeaYgh7aJMYFlDowMrzzTmrrnoBRi8jE6LRMWxp9je19EjM%2BZGPsaPUoRmnVQZa3TPNO2gMlqtRyZ4jG8ly3VQL4C9pt%2Bw%2Bq%2BZ6RA93jr6vCduUgjRhxvaBDeIVDktL8HhmewcXXG%2FgmNsNZubjceOnradcwMMYtrhIfSLjwsJhBrf36W0oOx0yZSjV3DZxKLYfhswBpzSjKWJ%2FTtLtsu53DGhoA5WodrD93WtDSgKVjptILdvTtl%2BZSwCOwh2HLhR07%2FEr47z7y0FL%2Fjyh%2BOZgA%2FsxlBOM8OWv0%2B9gOHuC4LxxHVlHewKRsE2ek7OyjYD1sLOJl%2FmpG32phOMMPM4sAGOqUBaHYekLop5MRfXjGQw1TH3hqhZtuv%2FKPL%2F4hBNlwwmAVdD420U4tunuYqYgNyfwXdNsKRpaAkS4cZQKT5kmqrEWRMPhmACsTPNIds8pKzvOB6%2BVieA1p%2BzkgaW07Fi5IUN5W6f2yBtpd2iuB6%2F9CmiOqGGeq0V4r30i%2BT%2FTiNaCpGryu0MeS7r6U3nn2ZqMc%2BdC%2B7fpNHcS4djcRKURfitS8QjQuo&X-Amz-Signature=86972ee1e47672b47b221fc6562e569297667216a8e98b2b547f3f805d87e965&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U3YI66O%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCB6n23MakU%2FTxAuLe6XO7vMDXcwmMS6t4WvKjvAcmfAiEAuLKN8ucWRh%2B9VktHSDk4mmZpgthU5kvxQ0zDtoV3QqAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDC4CToNoIgwOsj1XRyrcA0KQg59aP3ejP8IT18vSrTrCJalF6fQD80cKuzl%2B8ZUbfeLl39mUhdRTwT15yGrhLp3dyWcNI9hBIDaCRA7cht16iZw%2BXHPNglAukjlcCTZhA5phUe%2FGbMTs59KkqkUZvw1us0%2FOPMiyzQoL8l1qCIW8nA8DkEWFt8hP5bQcqxaJMUGRpc0VbEiVC8DImxdkfQmVdpTZUQwwXWpt%2FLEFSgo7bF%2BEASkctF1hkKeDcQT%2BdIjg079F7EelbiEtLGvCkdrRiw8qdRtYsVHMU1alqNB0no6CjpdJWy26fokqWaOxeaYgh7aJMYFlDowMrzzTmrrnoBRi8jE6LRMWxp9je19EjM%2BZGPsaPUoRmnVQZa3TPNO2gMlqtRyZ4jG8ly3VQL4C9pt%2Bw%2Bq%2BZ6RA93jr6vCduUgjRhxvaBDeIVDktL8HhmewcXXG%2FgmNsNZubjceOnradcwMMYtrhIfSLjwsJhBrf36W0oOx0yZSjV3DZxKLYfhswBpzSjKWJ%2FTtLtsu53DGhoA5WodrD93WtDSgKVjptILdvTtl%2BZSwCOwh2HLhR07%2FEr47z7y0FL%2Fjyh%2BOZgA%2FsxlBOM8OWv0%2B9gOHuC4LxxHVlHewKRsE2ek7OyjYD1sLOJl%2FmpG32phOMMPM4sAGOqUBaHYekLop5MRfXjGQw1TH3hqhZtuv%2FKPL%2F4hBNlwwmAVdD420U4tunuYqYgNyfwXdNsKRpaAkS4cZQKT5kmqrEWRMPhmACsTPNIds8pKzvOB6%2BVieA1p%2BzkgaW07Fi5IUN5W6f2yBtpd2iuB6%2F9CmiOqGGeq0V4r30i%2BT%2FTiNaCpGryu0MeS7r6U3nn2ZqMc%2BdC%2B7fpNHcS4djcRKURfitS8QjQuo&X-Amz-Signature=146c56218c13ebb4f7c1bc23ffc0b0fa7b5b860c36d5a2330ad22bcccaa15756&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U3YI66O%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCB6n23MakU%2FTxAuLe6XO7vMDXcwmMS6t4WvKjvAcmfAiEAuLKN8ucWRh%2B9VktHSDk4mmZpgthU5kvxQ0zDtoV3QqAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDC4CToNoIgwOsj1XRyrcA0KQg59aP3ejP8IT18vSrTrCJalF6fQD80cKuzl%2B8ZUbfeLl39mUhdRTwT15yGrhLp3dyWcNI9hBIDaCRA7cht16iZw%2BXHPNglAukjlcCTZhA5phUe%2FGbMTs59KkqkUZvw1us0%2FOPMiyzQoL8l1qCIW8nA8DkEWFt8hP5bQcqxaJMUGRpc0VbEiVC8DImxdkfQmVdpTZUQwwXWpt%2FLEFSgo7bF%2BEASkctF1hkKeDcQT%2BdIjg079F7EelbiEtLGvCkdrRiw8qdRtYsVHMU1alqNB0no6CjpdJWy26fokqWaOxeaYgh7aJMYFlDowMrzzTmrrnoBRi8jE6LRMWxp9je19EjM%2BZGPsaPUoRmnVQZa3TPNO2gMlqtRyZ4jG8ly3VQL4C9pt%2Bw%2Bq%2BZ6RA93jr6vCduUgjRhxvaBDeIVDktL8HhmewcXXG%2FgmNsNZubjceOnradcwMMYtrhIfSLjwsJhBrf36W0oOx0yZSjV3DZxKLYfhswBpzSjKWJ%2FTtLtsu53DGhoA5WodrD93WtDSgKVjptILdvTtl%2BZSwCOwh2HLhR07%2FEr47z7y0FL%2Fjyh%2BOZgA%2FsxlBOM8OWv0%2B9gOHuC4LxxHVlHewKRsE2ek7OyjYD1sLOJl%2FmpG32phOMMPM4sAGOqUBaHYekLop5MRfXjGQw1TH3hqhZtuv%2FKPL%2F4hBNlwwmAVdD420U4tunuYqYgNyfwXdNsKRpaAkS4cZQKT5kmqrEWRMPhmACsTPNIds8pKzvOB6%2BVieA1p%2BzkgaW07Fi5IUN5W6f2yBtpd2iuB6%2F9CmiOqGGeq0V4r30i%2BT%2FTiNaCpGryu0MeS7r6U3nn2ZqMc%2BdC%2B7fpNHcS4djcRKURfitS8QjQuo&X-Amz-Signature=1245cfc4fba06fbc41971dd9a32c37618778396f02a15fee4d862d9ba52ec9ca&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U3YI66O%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCB6n23MakU%2FTxAuLe6XO7vMDXcwmMS6t4WvKjvAcmfAiEAuLKN8ucWRh%2B9VktHSDk4mmZpgthU5kvxQ0zDtoV3QqAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDC4CToNoIgwOsj1XRyrcA0KQg59aP3ejP8IT18vSrTrCJalF6fQD80cKuzl%2B8ZUbfeLl39mUhdRTwT15yGrhLp3dyWcNI9hBIDaCRA7cht16iZw%2BXHPNglAukjlcCTZhA5phUe%2FGbMTs59KkqkUZvw1us0%2FOPMiyzQoL8l1qCIW8nA8DkEWFt8hP5bQcqxaJMUGRpc0VbEiVC8DImxdkfQmVdpTZUQwwXWpt%2FLEFSgo7bF%2BEASkctF1hkKeDcQT%2BdIjg079F7EelbiEtLGvCkdrRiw8qdRtYsVHMU1alqNB0no6CjpdJWy26fokqWaOxeaYgh7aJMYFlDowMrzzTmrrnoBRi8jE6LRMWxp9je19EjM%2BZGPsaPUoRmnVQZa3TPNO2gMlqtRyZ4jG8ly3VQL4C9pt%2Bw%2Bq%2BZ6RA93jr6vCduUgjRhxvaBDeIVDktL8HhmewcXXG%2FgmNsNZubjceOnradcwMMYtrhIfSLjwsJhBrf36W0oOx0yZSjV3DZxKLYfhswBpzSjKWJ%2FTtLtsu53DGhoA5WodrD93WtDSgKVjptILdvTtl%2BZSwCOwh2HLhR07%2FEr47z7y0FL%2Fjyh%2BOZgA%2FsxlBOM8OWv0%2B9gOHuC4LxxHVlHewKRsE2ek7OyjYD1sLOJl%2FmpG32phOMMPM4sAGOqUBaHYekLop5MRfXjGQw1TH3hqhZtuv%2FKPL%2F4hBNlwwmAVdD420U4tunuYqYgNyfwXdNsKRpaAkS4cZQKT5kmqrEWRMPhmACsTPNIds8pKzvOB6%2BVieA1p%2BzkgaW07Fi5IUN5W6f2yBtpd2iuB6%2F9CmiOqGGeq0V4r30i%2BT%2FTiNaCpGryu0MeS7r6U3nn2ZqMc%2BdC%2B7fpNHcS4djcRKURfitS8QjQuo&X-Amz-Signature=63082e750e8196b890e49ccd8889aa84ff5e7bfd811b029d1943f500192f14f8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U3YI66O%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCB6n23MakU%2FTxAuLe6XO7vMDXcwmMS6t4WvKjvAcmfAiEAuLKN8ucWRh%2B9VktHSDk4mmZpgthU5kvxQ0zDtoV3QqAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDC4CToNoIgwOsj1XRyrcA0KQg59aP3ejP8IT18vSrTrCJalF6fQD80cKuzl%2B8ZUbfeLl39mUhdRTwT15yGrhLp3dyWcNI9hBIDaCRA7cht16iZw%2BXHPNglAukjlcCTZhA5phUe%2FGbMTs59KkqkUZvw1us0%2FOPMiyzQoL8l1qCIW8nA8DkEWFt8hP5bQcqxaJMUGRpc0VbEiVC8DImxdkfQmVdpTZUQwwXWpt%2FLEFSgo7bF%2BEASkctF1hkKeDcQT%2BdIjg079F7EelbiEtLGvCkdrRiw8qdRtYsVHMU1alqNB0no6CjpdJWy26fokqWaOxeaYgh7aJMYFlDowMrzzTmrrnoBRi8jE6LRMWxp9je19EjM%2BZGPsaPUoRmnVQZa3TPNO2gMlqtRyZ4jG8ly3VQL4C9pt%2Bw%2Bq%2BZ6RA93jr6vCduUgjRhxvaBDeIVDktL8HhmewcXXG%2FgmNsNZubjceOnradcwMMYtrhIfSLjwsJhBrf36W0oOx0yZSjV3DZxKLYfhswBpzSjKWJ%2FTtLtsu53DGhoA5WodrD93WtDSgKVjptILdvTtl%2BZSwCOwh2HLhR07%2FEr47z7y0FL%2Fjyh%2BOZgA%2FsxlBOM8OWv0%2B9gOHuC4LxxHVlHewKRsE2ek7OyjYD1sLOJl%2FmpG32phOMMPM4sAGOqUBaHYekLop5MRfXjGQw1TH3hqhZtuv%2FKPL%2F4hBNlwwmAVdD420U4tunuYqYgNyfwXdNsKRpaAkS4cZQKT5kmqrEWRMPhmACsTPNIds8pKzvOB6%2BVieA1p%2BzkgaW07Fi5IUN5W6f2yBtpd2iuB6%2F9CmiOqGGeq0V4r30i%2BT%2FTiNaCpGryu0MeS7r6U3nn2ZqMc%2BdC%2B7fpNHcS4djcRKURfitS8QjQuo&X-Amz-Signature=24bce92a0daef58b8a417896edfc239e1b01591599fa39bf4eb106783f3b205d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U3YI66O%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCB6n23MakU%2FTxAuLe6XO7vMDXcwmMS6t4WvKjvAcmfAiEAuLKN8ucWRh%2B9VktHSDk4mmZpgthU5kvxQ0zDtoV3QqAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDC4CToNoIgwOsj1XRyrcA0KQg59aP3ejP8IT18vSrTrCJalF6fQD80cKuzl%2B8ZUbfeLl39mUhdRTwT15yGrhLp3dyWcNI9hBIDaCRA7cht16iZw%2BXHPNglAukjlcCTZhA5phUe%2FGbMTs59KkqkUZvw1us0%2FOPMiyzQoL8l1qCIW8nA8DkEWFt8hP5bQcqxaJMUGRpc0VbEiVC8DImxdkfQmVdpTZUQwwXWpt%2FLEFSgo7bF%2BEASkctF1hkKeDcQT%2BdIjg079F7EelbiEtLGvCkdrRiw8qdRtYsVHMU1alqNB0no6CjpdJWy26fokqWaOxeaYgh7aJMYFlDowMrzzTmrrnoBRi8jE6LRMWxp9je19EjM%2BZGPsaPUoRmnVQZa3TPNO2gMlqtRyZ4jG8ly3VQL4C9pt%2Bw%2Bq%2BZ6RA93jr6vCduUgjRhxvaBDeIVDktL8HhmewcXXG%2FgmNsNZubjceOnradcwMMYtrhIfSLjwsJhBrf36W0oOx0yZSjV3DZxKLYfhswBpzSjKWJ%2FTtLtsu53DGhoA5WodrD93WtDSgKVjptILdvTtl%2BZSwCOwh2HLhR07%2FEr47z7y0FL%2Fjyh%2BOZgA%2FsxlBOM8OWv0%2B9gOHuC4LxxHVlHewKRsE2ek7OyjYD1sLOJl%2FmpG32phOMMPM4sAGOqUBaHYekLop5MRfXjGQw1TH3hqhZtuv%2FKPL%2F4hBNlwwmAVdD420U4tunuYqYgNyfwXdNsKRpaAkS4cZQKT5kmqrEWRMPhmACsTPNIds8pKzvOB6%2BVieA1p%2BzkgaW07Fi5IUN5W6f2yBtpd2iuB6%2F9CmiOqGGeq0V4r30i%2BT%2FTiNaCpGryu0MeS7r6U3nn2ZqMc%2BdC%2B7fpNHcS4djcRKURfitS8QjQuo&X-Amz-Signature=d5a96045979af6d3b62115a4e323908fd1f93ec2ff5d08c450d0e6c031ece5cd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U3YI66O%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCB6n23MakU%2FTxAuLe6XO7vMDXcwmMS6t4WvKjvAcmfAiEAuLKN8ucWRh%2B9VktHSDk4mmZpgthU5kvxQ0zDtoV3QqAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDC4CToNoIgwOsj1XRyrcA0KQg59aP3ejP8IT18vSrTrCJalF6fQD80cKuzl%2B8ZUbfeLl39mUhdRTwT15yGrhLp3dyWcNI9hBIDaCRA7cht16iZw%2BXHPNglAukjlcCTZhA5phUe%2FGbMTs59KkqkUZvw1us0%2FOPMiyzQoL8l1qCIW8nA8DkEWFt8hP5bQcqxaJMUGRpc0VbEiVC8DImxdkfQmVdpTZUQwwXWpt%2FLEFSgo7bF%2BEASkctF1hkKeDcQT%2BdIjg079F7EelbiEtLGvCkdrRiw8qdRtYsVHMU1alqNB0no6CjpdJWy26fokqWaOxeaYgh7aJMYFlDowMrzzTmrrnoBRi8jE6LRMWxp9je19EjM%2BZGPsaPUoRmnVQZa3TPNO2gMlqtRyZ4jG8ly3VQL4C9pt%2Bw%2Bq%2BZ6RA93jr6vCduUgjRhxvaBDeIVDktL8HhmewcXXG%2FgmNsNZubjceOnradcwMMYtrhIfSLjwsJhBrf36W0oOx0yZSjV3DZxKLYfhswBpzSjKWJ%2FTtLtsu53DGhoA5WodrD93WtDSgKVjptILdvTtl%2BZSwCOwh2HLhR07%2FEr47z7y0FL%2Fjyh%2BOZgA%2FsxlBOM8OWv0%2B9gOHuC4LxxHVlHewKRsE2ek7OyjYD1sLOJl%2FmpG32phOMMPM4sAGOqUBaHYekLop5MRfXjGQw1TH3hqhZtuv%2FKPL%2F4hBNlwwmAVdD420U4tunuYqYgNyfwXdNsKRpaAkS4cZQKT5kmqrEWRMPhmACsTPNIds8pKzvOB6%2BVieA1p%2BzkgaW07Fi5IUN5W6f2yBtpd2iuB6%2F9CmiOqGGeq0V4r30i%2BT%2FTiNaCpGryu0MeS7r6U3nn2ZqMc%2BdC%2B7fpNHcS4djcRKURfitS8QjQuo&X-Amz-Signature=4a05c5cf800bd3488e3099d1b06724e50c113f89e7c08d3a40ad93ee9e64c6c5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
