---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T5W6FZI%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFS6kRTfH4sAgPIp7iOn7SASZZ1Ng4R2sPMmotp%2FyXMUAiEAgQXXgFCoOShiuI77LzydEAXHVcyTD791lGtv%2BFoqz4UqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOaQOX8QsdpTh46M8ircA6zDCuQ9D3M1En189i7PZoFe88ZQPQfBhqTrIR5bONidz3hfV%2FzAtkaldSQT6Lno44IR6f9h3jHwFnd3KggqLz6bAHBmAL1RVsG5SF7iHAgf2kW6Jlg7Yi0xy88pPWjkGV8y4Xci1SH9x%2BJe0p239MWs2EDd%2Fymlk2RObeS4QzNGzrXXNCsQwhBjX5mMsjtlfO%2FrLfE5r54x%2BN8Ruikmzwgs1bPgBCiSs29r3vKCV4Bf9%2BVp5WP77JqbZSCprbdwWV4mLB%2BdTaMvFdv9jXSaSHXwuMHWLsZXfCD14wIvGa63284QT4gn0ek7tVRSntH1u2y9S62OF1E%2FNnKGTe4trpDRuaWNeCYIZiI4EVS%2Bb7LrxMb0IXaAnDLWvH8yNq5%2FJl3nJV9n9Y5rt02QMeGlKPDecEc9z1pq7qkvjQA85yqVcGUaoL621%2FntIlmwMT9e6r4Gf3QBdf0tUDjhG82VjiY6JDz6w2dS7KMBoTckTtiNqynJkybgPbikCZR5g6cnug2%2BI8L1D8dBar%2F8Vq4Z875X6RorYuq2xBDzDw07iqKmcnfDrrAuew9Dr94e8tUqXgFCzDkGrypYG976B9VYAWI9M%2F9Rj%2BuclVmtFRutwUGlx%2BADz5A35onDRXYEMIXsgL8GOqUBWv%2FbMDr18fVff39hhTTE4%2Bk%2F55OVOAc1AIckHaS3KJRxLgVY7uZ5UzbHy4%2F6rdrWG9BusqMidy2S9Gdwv6WAAT3d%2FFkzZVELHuy7cKFDv1pKbGwzXvq5VVVP0Z3596oj0EoHIAriXYwqi5d1fE%2B9ScchvFr9VW4FEIKoQZMZUD45S3qipLdWBR9SjgDDk8CDDRk3xQd6IKMgVDeXRVZ79WR%2BQjcK&X-Amz-Signature=42d7457797ac366710104da074c3e9f4bfaba4bd5f572d0d5bde2c9ac5de7697&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T5W6FZI%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFS6kRTfH4sAgPIp7iOn7SASZZ1Ng4R2sPMmotp%2FyXMUAiEAgQXXgFCoOShiuI77LzydEAXHVcyTD791lGtv%2BFoqz4UqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOaQOX8QsdpTh46M8ircA6zDCuQ9D3M1En189i7PZoFe88ZQPQfBhqTrIR5bONidz3hfV%2FzAtkaldSQT6Lno44IR6f9h3jHwFnd3KggqLz6bAHBmAL1RVsG5SF7iHAgf2kW6Jlg7Yi0xy88pPWjkGV8y4Xci1SH9x%2BJe0p239MWs2EDd%2Fymlk2RObeS4QzNGzrXXNCsQwhBjX5mMsjtlfO%2FrLfE5r54x%2BN8Ruikmzwgs1bPgBCiSs29r3vKCV4Bf9%2BVp5WP77JqbZSCprbdwWV4mLB%2BdTaMvFdv9jXSaSHXwuMHWLsZXfCD14wIvGa63284QT4gn0ek7tVRSntH1u2y9S62OF1E%2FNnKGTe4trpDRuaWNeCYIZiI4EVS%2Bb7LrxMb0IXaAnDLWvH8yNq5%2FJl3nJV9n9Y5rt02QMeGlKPDecEc9z1pq7qkvjQA85yqVcGUaoL621%2FntIlmwMT9e6r4Gf3QBdf0tUDjhG82VjiY6JDz6w2dS7KMBoTckTtiNqynJkybgPbikCZR5g6cnug2%2BI8L1D8dBar%2F8Vq4Z875X6RorYuq2xBDzDw07iqKmcnfDrrAuew9Dr94e8tUqXgFCzDkGrypYG976B9VYAWI9M%2F9Rj%2BuclVmtFRutwUGlx%2BADz5A35onDRXYEMIXsgL8GOqUBWv%2FbMDr18fVff39hhTTE4%2Bk%2F55OVOAc1AIckHaS3KJRxLgVY7uZ5UzbHy4%2F6rdrWG9BusqMidy2S9Gdwv6WAAT3d%2FFkzZVELHuy7cKFDv1pKbGwzXvq5VVVP0Z3596oj0EoHIAriXYwqi5d1fE%2B9ScchvFr9VW4FEIKoQZMZUD45S3qipLdWBR9SjgDDk8CDDRk3xQd6IKMgVDeXRVZ79WR%2BQjcK&X-Amz-Signature=5345bdc80326032c07d773d170c533ce7efcc6fd8d4460c292c90620e152d5b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCAMGZYT%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqscTvJRMZ8aCXDlHUq0aWryZdNQDCVTPHEeKLRi5GUgIgOxmqWxZjCXXH%2FjJJlYCKgBWiR0ecV6SSvYE9U70THRAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh1Tqke%2FeAxYcPA%2FircA6hHB3XmsC%2FIqusjFsZS2ObVjQVYDF0W3VMMmG6%2BKlcoRWxb%2FOd%2BudM1Yq2Bijv4JSBOjcAKCGmRwzWMFGSjjwhHx5bX6PSEAVD%2BRVdPMkkX4yCtgbgGwO6cnweiohnjXy64OSD4ikz3hj3D6mrsU5Y8Z0ao3wgvMDtJt7mBUyVpbq%2Fhm%2FCJ7E6oiZo8%2FkEiBLAHhMGC1CCSeh0cvSNi7uvoC3f9hiWDkWzmlJqhDR%2B1MqJdYilCYpQWaPLVs9YDw%2BA9%2FlAna0KA3LpP3AEPUmFLfL00Azk3hLHZdMsTCkxrKZL3D6dwxi44lttoW4DvBjVBtmyUfMJg13gIzGvkGedUtvAvqKNJl1PR3Ugud%2FEMV34IBah09OVA6gJx%2FgtdKAcNxNPJpxeoxPj22SNFIlvdAh19gtN3piSbDMphqrlcaTN93P6%2FBMuGOhqdIZpxB6szEZgM2K4qFoLOzDS70yh9CcZ0I1bkCf0kmFoLfof3fHSYjVzEZu6cyZ22twlYUnyn3YrRryWNP%2BO5rdImaz%2BrNzbpcvO1uAKIguG%2FP7Ohxg%2BH1fBLBeb4Etvx7%2FIXa5LEre0WeCJ4ZdixJtn56G1t63dLIzojBH4XjUQdIz7JxWlxmB4eUQnfx6cyMNvtgL8GOqUBd7WmEypvbJBbjg%2Bsx3LYoMUkusK5MhrWB68sB07r0rfRIObvZsy%2FJ2KMSTPCTuhpK4a8mCVhuN7o%2BVYIU%2B2giYjAjS%2Fq60lawBiEnVofkGoODLx%2F3vsX3PhgL%2BSZqmhiBOO39VUb%2BLEk9jph7s38JCtKZSnBuXw%2FuPvzSlMPARYz8YN%2B%2BHm%2FsB5Iy0hLIshMGTiRPDo3D%2FW%2FpxpOHfhpi8H1G2ga&X-Amz-Signature=36a95a02be900bdde11fb9b31fb4ea0f4ac7df0c04ae26935235611dba381756&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPTITUTW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOr4OpX5qZ24pH2%2Bq24PEEwgav4eP3%2B88v16%2FaUK7eNAIhAPPmxUUxNgJYPxCiftsY%2BJEUNiZo%2FUTjoWtf4EA4Cuc1KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuG009oAmPeZ602usq3AMnzwWjTdim4Es2UW7iHW63LJP9th0Iiv7Z3Zqdn59DZ3wwhI%2Bbc7Q146snb%2Bb%2BWKmd1lWpyJwG%2BmdDVu%2BnOO3waFG%2Fk4Y82Wc7BEkKghkqYCgN6mumpYtUxPXKEIscJQpSoEXzICphWuwFC87xI3F7TVLBK0iwYaQkEzWel8EDW3R3U7SkECEO0f%2FeODSqeXcFQYl2FpD8iECMNOhTSPuLII5sbhW7wLqLyTtNWWK0cdRpPP96b37N7XsZ7osrqdA2Zf8otLzQh64hUG6tEtsUewOUhboC0FHi1kpeKbdXSr8Z%2BKCDuxxR9P3eS6uy3xW%2BJdE2qWV0g%2FqZwpze0Nmpx5vao5XvSAEkZqj7TTYRAPnQfg2rvhYLN5VODf5m4PMvSB9GU%2FrDrz9vWn9%2FNr1Wbw3oJRQSFlhxctZdX%2BbWzMbsf6d7l8kG%2FjUAVTFZcBjC08ZFR9BOQ11O%2Bz57%2Fa2yCcVmq%2BFPSfA1uAQloSFrwr40%2Fi6YMUZ53ztFAcG3NnCgQuRFM2Gz%2BdZazEc4CLkUlqvEHAjawsjaV8lY%2B0U1z7Yh5XEJnAHr9NWE%2F3DqjKPrsgAcchrwpBTF%2FK0yyNIqnfBgAvbC5yWoV2%2Fm9uPpRC4gUxVXElc61kEQKTCE8IC%2FBjqkAUx4mGnANttToMD%2BZIjEaXy10Ew87Kgje8WH6Es3Wkkv5pmS4cJ1RiuxTG2FlVYIigxJc6hv0hee8SfiViVG9op4fA30yqzFKthCjaxuTqG5FcMcsaFaMdtdDXGgAUz7%2B0XVgxcWGZPdKhACRZNw%2BIvZy1mNdt9Cfo59jd3my9G6EJSfHmpzqzE8STONvf%2BIZKXOZdIWPMWMmU3wPBx24mmigFbV&X-Amz-Signature=51ab1477d3e5e4e74b7cf7f049bfa84d24d9785935f96ff494a838179aad3ea8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T5W6FZI%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFS6kRTfH4sAgPIp7iOn7SASZZ1Ng4R2sPMmotp%2FyXMUAiEAgQXXgFCoOShiuI77LzydEAXHVcyTD791lGtv%2BFoqz4UqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOaQOX8QsdpTh46M8ircA6zDCuQ9D3M1En189i7PZoFe88ZQPQfBhqTrIR5bONidz3hfV%2FzAtkaldSQT6Lno44IR6f9h3jHwFnd3KggqLz6bAHBmAL1RVsG5SF7iHAgf2kW6Jlg7Yi0xy88pPWjkGV8y4Xci1SH9x%2BJe0p239MWs2EDd%2Fymlk2RObeS4QzNGzrXXNCsQwhBjX5mMsjtlfO%2FrLfE5r54x%2BN8Ruikmzwgs1bPgBCiSs29r3vKCV4Bf9%2BVp5WP77JqbZSCprbdwWV4mLB%2BdTaMvFdv9jXSaSHXwuMHWLsZXfCD14wIvGa63284QT4gn0ek7tVRSntH1u2y9S62OF1E%2FNnKGTe4trpDRuaWNeCYIZiI4EVS%2Bb7LrxMb0IXaAnDLWvH8yNq5%2FJl3nJV9n9Y5rt02QMeGlKPDecEc9z1pq7qkvjQA85yqVcGUaoL621%2FntIlmwMT9e6r4Gf3QBdf0tUDjhG82VjiY6JDz6w2dS7KMBoTckTtiNqynJkybgPbikCZR5g6cnug2%2BI8L1D8dBar%2F8Vq4Z875X6RorYuq2xBDzDw07iqKmcnfDrrAuew9Dr94e8tUqXgFCzDkGrypYG976B9VYAWI9M%2F9Rj%2BuclVmtFRutwUGlx%2BADz5A35onDRXYEMIXsgL8GOqUBWv%2FbMDr18fVff39hhTTE4%2Bk%2F55OVOAc1AIckHaS3KJRxLgVY7uZ5UzbHy4%2F6rdrWG9BusqMidy2S9Gdwv6WAAT3d%2FFkzZVELHuy7cKFDv1pKbGwzXvq5VVVP0Z3596oj0EoHIAriXYwqi5d1fE%2B9ScchvFr9VW4FEIKoQZMZUD45S3qipLdWBR9SjgDDk8CDDRk3xQd6IKMgVDeXRVZ79WR%2BQjcK&X-Amz-Signature=40d8fc58851a973d96fb1535d9f3eb44cbcf7f2de3b901aad2a176f27fde91bd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
