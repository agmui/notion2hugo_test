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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB7AASXL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr19rJaj0YMtMJT%2FdEPOTtqdtRL6qDgGSRTpsiDOgQOAiAhUtV7bW3mAuS31gaMQS6R6PISoRh0sBfNfcIIY17GxCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMLkQ%2FkC91FV3b78F7KtwDohFD7tMULWuMOlCdcE2hknp%2FSUhoJBDvAfCOyz01CkmYWObMC%2BP553IXS7cm6gm5nW1%2FV9qURjU1VLA%2FJ%2BRpM2b2iTEEv1Fsuq1rvywfj2CBOc6siFHh9cV2MaKHAPn3qJHRjygTnnHjQ7E5ozyPkxUu8tHem4fgvtrrVR%2BMDoBw1qRD71AAmf6%2FGTCJDqK6M2zMDA1gzxTW%2BDnHkhL8p6V3KVhFsBjSrwkLqnkxTqgFmM6D4XvTihq3sQkGj%2Fs1vic92cNemyxsk9g5k3RatWyLEvZj6XqynJfu7v%2FrQhD0kleR84UqK90CYHy6sNeM4ajV6F6qW0Vbj1tM9USgxtfiqYI3AErjCgLYrLi4XuVv3BQadK4zKRNUgvozv8P9w5toetkRVVDfhGJR1wtrCItaWkpw2anqgMvlgXy3TJN9JuakkACAKcn8Dmi3coYYWtdehD97BNx%2BpwXPPV%2BsmMa4T7kLsHbaC8a%2BbLWGxODBWeff1ZJUG%2BRiseJXnekIQmlMJIpXXkrGr46ZEs4Upbn36FEcYfQrn892WP%2Bd7Qu4S%2F%2B3v3U7MycECqE379nNfzTVX1%2FEjpfEribqRVKxMf5oot%2FtN1%2BB5o%2FZuLiaWxL%2F8Kwy%2BaeGVjQfuJMwwNqXvwY6pgFmIrb8yap9qnHEsqT%2FK%2BtgGPQkdlkkhv%2BzB%2F2JomGkWo2KuFtIgX1CkP3Fku%2FwEP%2BgbNkgfGllGrPJOvfmARoEwNHrz%2FRtYR%2BV5RQuDtuLD2un29kK134cEP28pJ0pjsGqMmWGgCxgh50VUOxPCR3oLGi2GASDzn3%2F8ODOikk0Nf6IIw5A4ocDd%2BcVNCnz%2FeQPCBhxf8gxxfp7fY5Q%2FMuKHHZlPFIx&X-Amz-Signature=c14a44f40cc41002941747861526e2b2444eb119bef7a49891c81f7e7b8624a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB7AASXL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr19rJaj0YMtMJT%2FdEPOTtqdtRL6qDgGSRTpsiDOgQOAiAhUtV7bW3mAuS31gaMQS6R6PISoRh0sBfNfcIIY17GxCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMLkQ%2FkC91FV3b78F7KtwDohFD7tMULWuMOlCdcE2hknp%2FSUhoJBDvAfCOyz01CkmYWObMC%2BP553IXS7cm6gm5nW1%2FV9qURjU1VLA%2FJ%2BRpM2b2iTEEv1Fsuq1rvywfj2CBOc6siFHh9cV2MaKHAPn3qJHRjygTnnHjQ7E5ozyPkxUu8tHem4fgvtrrVR%2BMDoBw1qRD71AAmf6%2FGTCJDqK6M2zMDA1gzxTW%2BDnHkhL8p6V3KVhFsBjSrwkLqnkxTqgFmM6D4XvTihq3sQkGj%2Fs1vic92cNemyxsk9g5k3RatWyLEvZj6XqynJfu7v%2FrQhD0kleR84UqK90CYHy6sNeM4ajV6F6qW0Vbj1tM9USgxtfiqYI3AErjCgLYrLi4XuVv3BQadK4zKRNUgvozv8P9w5toetkRVVDfhGJR1wtrCItaWkpw2anqgMvlgXy3TJN9JuakkACAKcn8Dmi3coYYWtdehD97BNx%2BpwXPPV%2BsmMa4T7kLsHbaC8a%2BbLWGxODBWeff1ZJUG%2BRiseJXnekIQmlMJIpXXkrGr46ZEs4Upbn36FEcYfQrn892WP%2Bd7Qu4S%2F%2B3v3U7MycECqE379nNfzTVX1%2FEjpfEribqRVKxMf5oot%2FtN1%2BB5o%2FZuLiaWxL%2F8Kwy%2BaeGVjQfuJMwwNqXvwY6pgFmIrb8yap9qnHEsqT%2FK%2BtgGPQkdlkkhv%2BzB%2F2JomGkWo2KuFtIgX1CkP3Fku%2FwEP%2BgbNkgfGllGrPJOvfmARoEwNHrz%2FRtYR%2BV5RQuDtuLD2un29kK134cEP28pJ0pjsGqMmWGgCxgh50VUOxPCR3oLGi2GASDzn3%2F8ODOikk0Nf6IIw5A4ocDd%2BcVNCnz%2FeQPCBhxf8gxxfp7fY5Q%2FMuKHHZlPFIx&X-Amz-Signature=e4bbd1542b03830af14e5e54b2f2c4e63f3f78ab83d90f516460839d0370583a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB7AASXL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr19rJaj0YMtMJT%2FdEPOTtqdtRL6qDgGSRTpsiDOgQOAiAhUtV7bW3mAuS31gaMQS6R6PISoRh0sBfNfcIIY17GxCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMLkQ%2FkC91FV3b78F7KtwDohFD7tMULWuMOlCdcE2hknp%2FSUhoJBDvAfCOyz01CkmYWObMC%2BP553IXS7cm6gm5nW1%2FV9qURjU1VLA%2FJ%2BRpM2b2iTEEv1Fsuq1rvywfj2CBOc6siFHh9cV2MaKHAPn3qJHRjygTnnHjQ7E5ozyPkxUu8tHem4fgvtrrVR%2BMDoBw1qRD71AAmf6%2FGTCJDqK6M2zMDA1gzxTW%2BDnHkhL8p6V3KVhFsBjSrwkLqnkxTqgFmM6D4XvTihq3sQkGj%2Fs1vic92cNemyxsk9g5k3RatWyLEvZj6XqynJfu7v%2FrQhD0kleR84UqK90CYHy6sNeM4ajV6F6qW0Vbj1tM9USgxtfiqYI3AErjCgLYrLi4XuVv3BQadK4zKRNUgvozv8P9w5toetkRVVDfhGJR1wtrCItaWkpw2anqgMvlgXy3TJN9JuakkACAKcn8Dmi3coYYWtdehD97BNx%2BpwXPPV%2BsmMa4T7kLsHbaC8a%2BbLWGxODBWeff1ZJUG%2BRiseJXnekIQmlMJIpXXkrGr46ZEs4Upbn36FEcYfQrn892WP%2Bd7Qu4S%2F%2B3v3U7MycECqE379nNfzTVX1%2FEjpfEribqRVKxMf5oot%2FtN1%2BB5o%2FZuLiaWxL%2F8Kwy%2BaeGVjQfuJMwwNqXvwY6pgFmIrb8yap9qnHEsqT%2FK%2BtgGPQkdlkkhv%2BzB%2F2JomGkWo2KuFtIgX1CkP3Fku%2FwEP%2BgbNkgfGllGrPJOvfmARoEwNHrz%2FRtYR%2BV5RQuDtuLD2un29kK134cEP28pJ0pjsGqMmWGgCxgh50VUOxPCR3oLGi2GASDzn3%2F8ODOikk0Nf6IIw5A4ocDd%2BcVNCnz%2FeQPCBhxf8gxxfp7fY5Q%2FMuKHHZlPFIx&X-Amz-Signature=774481c721ed0bbb84351f9c44b8e3a8732abff7da49c587d31fee70ac7fe0d6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB7AASXL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr19rJaj0YMtMJT%2FdEPOTtqdtRL6qDgGSRTpsiDOgQOAiAhUtV7bW3mAuS31gaMQS6R6PISoRh0sBfNfcIIY17GxCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMLkQ%2FkC91FV3b78F7KtwDohFD7tMULWuMOlCdcE2hknp%2FSUhoJBDvAfCOyz01CkmYWObMC%2BP553IXS7cm6gm5nW1%2FV9qURjU1VLA%2FJ%2BRpM2b2iTEEv1Fsuq1rvywfj2CBOc6siFHh9cV2MaKHAPn3qJHRjygTnnHjQ7E5ozyPkxUu8tHem4fgvtrrVR%2BMDoBw1qRD71AAmf6%2FGTCJDqK6M2zMDA1gzxTW%2BDnHkhL8p6V3KVhFsBjSrwkLqnkxTqgFmM6D4XvTihq3sQkGj%2Fs1vic92cNemyxsk9g5k3RatWyLEvZj6XqynJfu7v%2FrQhD0kleR84UqK90CYHy6sNeM4ajV6F6qW0Vbj1tM9USgxtfiqYI3AErjCgLYrLi4XuVv3BQadK4zKRNUgvozv8P9w5toetkRVVDfhGJR1wtrCItaWkpw2anqgMvlgXy3TJN9JuakkACAKcn8Dmi3coYYWtdehD97BNx%2BpwXPPV%2BsmMa4T7kLsHbaC8a%2BbLWGxODBWeff1ZJUG%2BRiseJXnekIQmlMJIpXXkrGr46ZEs4Upbn36FEcYfQrn892WP%2Bd7Qu4S%2F%2B3v3U7MycECqE379nNfzTVX1%2FEjpfEribqRVKxMf5oot%2FtN1%2BB5o%2FZuLiaWxL%2F8Kwy%2BaeGVjQfuJMwwNqXvwY6pgFmIrb8yap9qnHEsqT%2FK%2BtgGPQkdlkkhv%2BzB%2F2JomGkWo2KuFtIgX1CkP3Fku%2FwEP%2BgbNkgfGllGrPJOvfmARoEwNHrz%2FRtYR%2BV5RQuDtuLD2un29kK134cEP28pJ0pjsGqMmWGgCxgh50VUOxPCR3oLGi2GASDzn3%2F8ODOikk0Nf6IIw5A4ocDd%2BcVNCnz%2FeQPCBhxf8gxxfp7fY5Q%2FMuKHHZlPFIx&X-Amz-Signature=f517333ba8ba2d5b395d6a4db42f5f3423cdde5f39127a9df32f38cf42a8fac7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB7AASXL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr19rJaj0YMtMJT%2FdEPOTtqdtRL6qDgGSRTpsiDOgQOAiAhUtV7bW3mAuS31gaMQS6R6PISoRh0sBfNfcIIY17GxCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMLkQ%2FkC91FV3b78F7KtwDohFD7tMULWuMOlCdcE2hknp%2FSUhoJBDvAfCOyz01CkmYWObMC%2BP553IXS7cm6gm5nW1%2FV9qURjU1VLA%2FJ%2BRpM2b2iTEEv1Fsuq1rvywfj2CBOc6siFHh9cV2MaKHAPn3qJHRjygTnnHjQ7E5ozyPkxUu8tHem4fgvtrrVR%2BMDoBw1qRD71AAmf6%2FGTCJDqK6M2zMDA1gzxTW%2BDnHkhL8p6V3KVhFsBjSrwkLqnkxTqgFmM6D4XvTihq3sQkGj%2Fs1vic92cNemyxsk9g5k3RatWyLEvZj6XqynJfu7v%2FrQhD0kleR84UqK90CYHy6sNeM4ajV6F6qW0Vbj1tM9USgxtfiqYI3AErjCgLYrLi4XuVv3BQadK4zKRNUgvozv8P9w5toetkRVVDfhGJR1wtrCItaWkpw2anqgMvlgXy3TJN9JuakkACAKcn8Dmi3coYYWtdehD97BNx%2BpwXPPV%2BsmMa4T7kLsHbaC8a%2BbLWGxODBWeff1ZJUG%2BRiseJXnekIQmlMJIpXXkrGr46ZEs4Upbn36FEcYfQrn892WP%2Bd7Qu4S%2F%2B3v3U7MycECqE379nNfzTVX1%2FEjpfEribqRVKxMf5oot%2FtN1%2BB5o%2FZuLiaWxL%2F8Kwy%2BaeGVjQfuJMwwNqXvwY6pgFmIrb8yap9qnHEsqT%2FK%2BtgGPQkdlkkhv%2BzB%2F2JomGkWo2KuFtIgX1CkP3Fku%2FwEP%2BgbNkgfGllGrPJOvfmARoEwNHrz%2FRtYR%2BV5RQuDtuLD2un29kK134cEP28pJ0pjsGqMmWGgCxgh50VUOxPCR3oLGi2GASDzn3%2F8ODOikk0Nf6IIw5A4ocDd%2BcVNCnz%2FeQPCBhxf8gxxfp7fY5Q%2FMuKHHZlPFIx&X-Amz-Signature=c2de2f2d2c415abdf16c701f7ab65c1e6e4744c0cd43eb03766979d493ed61bf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB7AASXL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr19rJaj0YMtMJT%2FdEPOTtqdtRL6qDgGSRTpsiDOgQOAiAhUtV7bW3mAuS31gaMQS6R6PISoRh0sBfNfcIIY17GxCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMLkQ%2FkC91FV3b78F7KtwDohFD7tMULWuMOlCdcE2hknp%2FSUhoJBDvAfCOyz01CkmYWObMC%2BP553IXS7cm6gm5nW1%2FV9qURjU1VLA%2FJ%2BRpM2b2iTEEv1Fsuq1rvywfj2CBOc6siFHh9cV2MaKHAPn3qJHRjygTnnHjQ7E5ozyPkxUu8tHem4fgvtrrVR%2BMDoBw1qRD71AAmf6%2FGTCJDqK6M2zMDA1gzxTW%2BDnHkhL8p6V3KVhFsBjSrwkLqnkxTqgFmM6D4XvTihq3sQkGj%2Fs1vic92cNemyxsk9g5k3RatWyLEvZj6XqynJfu7v%2FrQhD0kleR84UqK90CYHy6sNeM4ajV6F6qW0Vbj1tM9USgxtfiqYI3AErjCgLYrLi4XuVv3BQadK4zKRNUgvozv8P9w5toetkRVVDfhGJR1wtrCItaWkpw2anqgMvlgXy3TJN9JuakkACAKcn8Dmi3coYYWtdehD97BNx%2BpwXPPV%2BsmMa4T7kLsHbaC8a%2BbLWGxODBWeff1ZJUG%2BRiseJXnekIQmlMJIpXXkrGr46ZEs4Upbn36FEcYfQrn892WP%2Bd7Qu4S%2F%2B3v3U7MycECqE379nNfzTVX1%2FEjpfEribqRVKxMf5oot%2FtN1%2BB5o%2FZuLiaWxL%2F8Kwy%2BaeGVjQfuJMwwNqXvwY6pgFmIrb8yap9qnHEsqT%2FK%2BtgGPQkdlkkhv%2BzB%2F2JomGkWo2KuFtIgX1CkP3Fku%2FwEP%2BgbNkgfGllGrPJOvfmARoEwNHrz%2FRtYR%2BV5RQuDtuLD2un29kK134cEP28pJ0pjsGqMmWGgCxgh50VUOxPCR3oLGi2GASDzn3%2F8ODOikk0Nf6IIw5A4ocDd%2BcVNCnz%2FeQPCBhxf8gxxfp7fY5Q%2FMuKHHZlPFIx&X-Amz-Signature=4a9bfdbeb15c92a77febcdec9582b85dc228a8b1b8f4cf16557f690f99bfce1f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB7AASXL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr19rJaj0YMtMJT%2FdEPOTtqdtRL6qDgGSRTpsiDOgQOAiAhUtV7bW3mAuS31gaMQS6R6PISoRh0sBfNfcIIY17GxCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMLkQ%2FkC91FV3b78F7KtwDohFD7tMULWuMOlCdcE2hknp%2FSUhoJBDvAfCOyz01CkmYWObMC%2BP553IXS7cm6gm5nW1%2FV9qURjU1VLA%2FJ%2BRpM2b2iTEEv1Fsuq1rvywfj2CBOc6siFHh9cV2MaKHAPn3qJHRjygTnnHjQ7E5ozyPkxUu8tHem4fgvtrrVR%2BMDoBw1qRD71AAmf6%2FGTCJDqK6M2zMDA1gzxTW%2BDnHkhL8p6V3KVhFsBjSrwkLqnkxTqgFmM6D4XvTihq3sQkGj%2Fs1vic92cNemyxsk9g5k3RatWyLEvZj6XqynJfu7v%2FrQhD0kleR84UqK90CYHy6sNeM4ajV6F6qW0Vbj1tM9USgxtfiqYI3AErjCgLYrLi4XuVv3BQadK4zKRNUgvozv8P9w5toetkRVVDfhGJR1wtrCItaWkpw2anqgMvlgXy3TJN9JuakkACAKcn8Dmi3coYYWtdehD97BNx%2BpwXPPV%2BsmMa4T7kLsHbaC8a%2BbLWGxODBWeff1ZJUG%2BRiseJXnekIQmlMJIpXXkrGr46ZEs4Upbn36FEcYfQrn892WP%2Bd7Qu4S%2F%2B3v3U7MycECqE379nNfzTVX1%2FEjpfEribqRVKxMf5oot%2FtN1%2BB5o%2FZuLiaWxL%2F8Kwy%2BaeGVjQfuJMwwNqXvwY6pgFmIrb8yap9qnHEsqT%2FK%2BtgGPQkdlkkhv%2BzB%2F2JomGkWo2KuFtIgX1CkP3Fku%2FwEP%2BgbNkgfGllGrPJOvfmARoEwNHrz%2FRtYR%2BV5RQuDtuLD2un29kK134cEP28pJ0pjsGqMmWGgCxgh50VUOxPCR3oLGi2GASDzn3%2F8ODOikk0Nf6IIw5A4ocDd%2BcVNCnz%2FeQPCBhxf8gxxfp7fY5Q%2FMuKHHZlPFIx&X-Amz-Signature=0c79c00f8b5164d21ce42ea4600a33e45e39a0a4b6411fb0297c5cefa0397696&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
