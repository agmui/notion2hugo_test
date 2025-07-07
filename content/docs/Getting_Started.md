---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BSV2SCD%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIQCtRcpoc0RjPdcO8l6cf9tpKYrmyO%2FUDL5dusLZ9zgSBQIfZ9pwvANBwcEQFmwBOFuMLAJDNK6tzFAhBY2yXAQ2Rir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM5%2BLLJ19480goNQRqKtwDG1CzkYfVzBC%2BqW2ES%2FB%2FQYoFQ7Hfhh2SjiodSFXxSOKONl6EcIRWW6ec7hJCOt6yUnVwesRMtOOXnzWvPP2GwK4yCblgwL9wQiKEIbsnNpA%2Bqher2OVwAFfGqKGDW35No%2Fn2Dq70MqcP2o3FXHzSR9jVgTKXyZDaE007pop3UWfKCHhfKhh7CKrLXRtF2N9ZQ5kLHk0vefs%2FPm6L5ff5HcaSsY%2BeEs7nIE5bJZxWnoBC8dO9H1s%2BUFIKcoy52AvKRlYiGnxh3rnw6pyU8r5CcreiRmwMED8UPNB%2FH%2BLY9Z%2BiuHECdxNjywbaHv5ReOCtz6l12ZmAx1%2FfA%2B79TDSYFxISZSxke5AlGJ1jLH2rl7gRnEQ0zYpPcmgpRiaqmLwS3%2BziDbvQDnjnBU%2F3Mb5c7D9ENinh7cJ4%2FvIZcNnekth8tVHReFgNe%2BgNStV1q4Fqd1UjOpujZTp6dgg7%2FfpQzEkBF8erKDuLUPvy7KN0ZDFuetnXd8jfdF063ShRf670DQb7UepV77gjFfLQtIMpkXfQ3OHI06REfaV%2B3is%2BWFIfWagw3iregcHtTXnYoeyBAmtNdZPsACCOTZF1mBLtamhXaptgrjKJwMw1plNgMzWTjOWFHKVR7407SnMwk7iuwwY6pgG5YHENKxzebd6ba2zxfjHZoSmDfOtxaDzGG7Y8l%2F3w7n3Jm%2FgW2cmbMzfK5ls6QnuljuD9h%2Fet5v2n7WdnjQeyHm8yoT5h%2BHDmhqJ2dqQB1G28KDkaeCWNnxUjpxDbh0DvEsQrWG%2BNXeTbSsmEyHghKZPwVsX%2Bp7TbZHXb7Zt5mP6CzUBAZ64aoXKsCv5%2BVKLPbNos9AQVhLEncZ6CmniO%2Bxo6e0z0&X-Amz-Signature=52a64dc1a80959567e5405f4e7c7611e14741306b1bb6ef2b94a5c310391c54b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BSV2SCD%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIQCtRcpoc0RjPdcO8l6cf9tpKYrmyO%2FUDL5dusLZ9zgSBQIfZ9pwvANBwcEQFmwBOFuMLAJDNK6tzFAhBY2yXAQ2Rir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM5%2BLLJ19480goNQRqKtwDG1CzkYfVzBC%2BqW2ES%2FB%2FQYoFQ7Hfhh2SjiodSFXxSOKONl6EcIRWW6ec7hJCOt6yUnVwesRMtOOXnzWvPP2GwK4yCblgwL9wQiKEIbsnNpA%2Bqher2OVwAFfGqKGDW35No%2Fn2Dq70MqcP2o3FXHzSR9jVgTKXyZDaE007pop3UWfKCHhfKhh7CKrLXRtF2N9ZQ5kLHk0vefs%2FPm6L5ff5HcaSsY%2BeEs7nIE5bJZxWnoBC8dO9H1s%2BUFIKcoy52AvKRlYiGnxh3rnw6pyU8r5CcreiRmwMED8UPNB%2FH%2BLY9Z%2BiuHECdxNjywbaHv5ReOCtz6l12ZmAx1%2FfA%2B79TDSYFxISZSxke5AlGJ1jLH2rl7gRnEQ0zYpPcmgpRiaqmLwS3%2BziDbvQDnjnBU%2F3Mb5c7D9ENinh7cJ4%2FvIZcNnekth8tVHReFgNe%2BgNStV1q4Fqd1UjOpujZTp6dgg7%2FfpQzEkBF8erKDuLUPvy7KN0ZDFuetnXd8jfdF063ShRf670DQb7UepV77gjFfLQtIMpkXfQ3OHI06REfaV%2B3is%2BWFIfWagw3iregcHtTXnYoeyBAmtNdZPsACCOTZF1mBLtamhXaptgrjKJwMw1plNgMzWTjOWFHKVR7407SnMwk7iuwwY6pgG5YHENKxzebd6ba2zxfjHZoSmDfOtxaDzGG7Y8l%2F3w7n3Jm%2FgW2cmbMzfK5ls6QnuljuD9h%2Fet5v2n7WdnjQeyHm8yoT5h%2BHDmhqJ2dqQB1G28KDkaeCWNnxUjpxDbh0DvEsQrWG%2BNXeTbSsmEyHghKZPwVsX%2Bp7TbZHXb7Zt5mP6CzUBAZ64aoXKsCv5%2BVKLPbNos9AQVhLEncZ6CmniO%2Bxo6e0z0&X-Amz-Signature=a72b2a92673c0021a478b96d1f5c62911c37036828b1f34a245f54530953e199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BSV2SCD%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIQCtRcpoc0RjPdcO8l6cf9tpKYrmyO%2FUDL5dusLZ9zgSBQIfZ9pwvANBwcEQFmwBOFuMLAJDNK6tzFAhBY2yXAQ2Rir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM5%2BLLJ19480goNQRqKtwDG1CzkYfVzBC%2BqW2ES%2FB%2FQYoFQ7Hfhh2SjiodSFXxSOKONl6EcIRWW6ec7hJCOt6yUnVwesRMtOOXnzWvPP2GwK4yCblgwL9wQiKEIbsnNpA%2Bqher2OVwAFfGqKGDW35No%2Fn2Dq70MqcP2o3FXHzSR9jVgTKXyZDaE007pop3UWfKCHhfKhh7CKrLXRtF2N9ZQ5kLHk0vefs%2FPm6L5ff5HcaSsY%2BeEs7nIE5bJZxWnoBC8dO9H1s%2BUFIKcoy52AvKRlYiGnxh3rnw6pyU8r5CcreiRmwMED8UPNB%2FH%2BLY9Z%2BiuHECdxNjywbaHv5ReOCtz6l12ZmAx1%2FfA%2B79TDSYFxISZSxke5AlGJ1jLH2rl7gRnEQ0zYpPcmgpRiaqmLwS3%2BziDbvQDnjnBU%2F3Mb5c7D9ENinh7cJ4%2FvIZcNnekth8tVHReFgNe%2BgNStV1q4Fqd1UjOpujZTp6dgg7%2FfpQzEkBF8erKDuLUPvy7KN0ZDFuetnXd8jfdF063ShRf670DQb7UepV77gjFfLQtIMpkXfQ3OHI06REfaV%2B3is%2BWFIfWagw3iregcHtTXnYoeyBAmtNdZPsACCOTZF1mBLtamhXaptgrjKJwMw1plNgMzWTjOWFHKVR7407SnMwk7iuwwY6pgG5YHENKxzebd6ba2zxfjHZoSmDfOtxaDzGG7Y8l%2F3w7n3Jm%2FgW2cmbMzfK5ls6QnuljuD9h%2Fet5v2n7WdnjQeyHm8yoT5h%2BHDmhqJ2dqQB1G28KDkaeCWNnxUjpxDbh0DvEsQrWG%2BNXeTbSsmEyHghKZPwVsX%2Bp7TbZHXb7Zt5mP6CzUBAZ64aoXKsCv5%2BVKLPbNos9AQVhLEncZ6CmniO%2Bxo6e0z0&X-Amz-Signature=422a82ad973156b431b2848f3271e7fb80507fd3eec2ee6f05947f0c88322f11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLP4OPW4%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHfPUBbW8b8f0rWx5KWQkx24eF1w%2BNpCuX7w9bxLaIGzAiBGUJqtWQ6ZtKtqe8Ys0E6u%2F2YLGFneUFpWtKOybln09Cr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM%2BwhxO3bh3JyQSaOWKtwDdBlqm6Rb64DVdyERCREVhGiqlWAashRmTUEnEQ38kGWXqn5zDB3vbrwKeMh7x0Zj8W2fcDewsemU7ArJtH%2BE8C%2F9g%2F1PEnVHb6sb1PjQLyhiVKs8trXdFLTrqitRu%2F26%2FY8szakSiT2Hi9zYS%2FBjBW%2FF3rLl2pipuJzFGJiccZiMKralEqjzZfqjcyabad04I0lZK%2FMhiodbjECOS6dilkYLXSeP4dAJDrqsaLdcf%2BqFXF5XrtfknLZOMwle52x7hNzGggcYxJFYrk2yvn8ZIBnJI%2BlzTnfSVGTAC4PyR7FTTw0A27tlgOon3G4ZVRjLtNskj7x9HioXA28RKrbP1QA3xEQSH%2B1IvNHijKU%2FnPo2zxUans7vmQxk3v56VDPL3oZ4HSJQSSR83GU2A7G%2FthjjPPSDznNq%2BG8Inh6955W4IKNUohLNmtFZP5Wa9xCC%2FUN4bjjnNM3A1epoBA70bVVSk55Wll5Pbpk9TawME3387StmgUldjW5FCKvMkQO%2BU%2BERYcqToGYDsocGkUmS2PfEcaEOSMzT9IEHbgwyhYypbUF%2BX6teP8CWbm%2F664niWJ3vNDWS4%2FUeUOcl92RBCovMdMnTmnAtHGqGo7Hk6Y%2BKqmnGSh18rCveuQ0wqLiuwwY6pgHtTs%2BXm5MxTITG%2Fri3b7sKFkAm%2FI0UMFCeQy3yZfMLtypDLFo54x3KSX7tmK2khOEYrWBjyp5nG%2F5mnTIVsnKEfgcHM82G0RnzEAv5t%2Fp6te6ofNOtgx3O9N0kFO3eC376JfkxhFXFj2uTyr4fscTTct860ZBmu9Xidw6z2CcqfKgLF8%2B0KORq13dnkdGyeKGgPOeDH%2FWKIrZeecB03%2FCGTsaZ1sfk&X-Amz-Signature=a10009cac8fea602cd5969bbff77310f7a72719c3c2dde0aaa35bdd64c608c4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGFJDUDJ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIFwoFsmXFo8H8s%2BGTg9wfZuV5w%2FaZbwQCpuSU%2BZztdPuAiBHGp%2FVLiI95N%2FOXEawxNAyD31yLF86eNy8eNGioY0%2FjSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMTn33K1Gb9tD53NntKtwDFbPVUEOcs2HFdr2YrKqcTkHgLPgVAGTmnod4B4Nfk09Ypc5jfT3CmhQBzevLFCkb3aLwdMlJJNtpN4IAGOygUnyC%2BJ%2FaNWwVmESg7UX1cY5GsnANjH6fhqB4eGtAHb75cam3LDhToqWJbHHYK%2FlVtgGxYBPlA5FJZJXQ9Yob1%2FBvV7Pu0T%2FnXJl1KDrooOByEb%2FpJIEhOmNIT0KpoRXRPfK3sEkLtzLfBSv9csZkhp9WFdLRn%2Flpsw7dZkQNzcEz9Yi5TaBnaAAMixgytbi06D68qZuq7HBbCweMJB3R0bDjrg0WWG5ejf8mlStSR7V5I%2BzSqTneottf%2FJ%2B%2BJIKn2eh%2FNo6rlRyCOXPoNZHPnx4MwEzryMWc6Nst%2FG3D8cPTvi6B6cE%2BczwYlWMqsChVCux2iUap%2BeCfqW9y7FeXK6TDTegULBfpje4Mq78PNoTLa3mz10kL3ZUa6iNEGI70Ote5U2StbU2mKdDws2Gkry3LPD8LrGqfMSswRWurFsxriJxfK2wcYmJBl%2FnfIx3%2FDgWxBd2beN7RAqWFJrZYEKoG5dXYI%2Fo27iA3qlHKzWAaKrYCVJdTXopOg%2F3aL%2Bw55DDXUx8uWToOyiqJSxIr6F25Nn1lcYtzn%2FA8e40w5beuwwY6pgEvvQF4RuXHMKEAN9%2BqKHQcvQmkaq3WkPu%2FOJn%2BhMblWZ1j8%2Fp9nBa8eMvp2av7P8e%2BUfnNJjj88%2BD8jkxu%2Fd8ovLTZRbZuhG0L9f9u4puZagahC3mH%2ByjGwh7mFo9N7Zp4DuccjF7Eyh3TPlrmCFEH%2FTYiycOvGCw1%2Bd3mU1Jvs41jp4ghwMuMzoPsixccZAzRbKgTgH2K9ndjYwkHRp3holOM76m6&X-Amz-Signature=644c1a2c0d5f30cb65cff25ac435a4180eaae3372987a2ad57b320d4a9cd5668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BSV2SCD%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIQCtRcpoc0RjPdcO8l6cf9tpKYrmyO%2FUDL5dusLZ9zgSBQIfZ9pwvANBwcEQFmwBOFuMLAJDNK6tzFAhBY2yXAQ2Rir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM5%2BLLJ19480goNQRqKtwDG1CzkYfVzBC%2BqW2ES%2FB%2FQYoFQ7Hfhh2SjiodSFXxSOKONl6EcIRWW6ec7hJCOt6yUnVwesRMtOOXnzWvPP2GwK4yCblgwL9wQiKEIbsnNpA%2Bqher2OVwAFfGqKGDW35No%2Fn2Dq70MqcP2o3FXHzSR9jVgTKXyZDaE007pop3UWfKCHhfKhh7CKrLXRtF2N9ZQ5kLHk0vefs%2FPm6L5ff5HcaSsY%2BeEs7nIE5bJZxWnoBC8dO9H1s%2BUFIKcoy52AvKRlYiGnxh3rnw6pyU8r5CcreiRmwMED8UPNB%2FH%2BLY9Z%2BiuHECdxNjywbaHv5ReOCtz6l12ZmAx1%2FfA%2B79TDSYFxISZSxke5AlGJ1jLH2rl7gRnEQ0zYpPcmgpRiaqmLwS3%2BziDbvQDnjnBU%2F3Mb5c7D9ENinh7cJ4%2FvIZcNnekth8tVHReFgNe%2BgNStV1q4Fqd1UjOpujZTp6dgg7%2FfpQzEkBF8erKDuLUPvy7KN0ZDFuetnXd8jfdF063ShRf670DQb7UepV77gjFfLQtIMpkXfQ3OHI06REfaV%2B3is%2BWFIfWagw3iregcHtTXnYoeyBAmtNdZPsACCOTZF1mBLtamhXaptgrjKJwMw1plNgMzWTjOWFHKVR7407SnMwk7iuwwY6pgG5YHENKxzebd6ba2zxfjHZoSmDfOtxaDzGG7Y8l%2F3w7n3Jm%2FgW2cmbMzfK5ls6QnuljuD9h%2Fet5v2n7WdnjQeyHm8yoT5h%2BHDmhqJ2dqQB1G28KDkaeCWNnxUjpxDbh0DvEsQrWG%2BNXeTbSsmEyHghKZPwVsX%2Bp7TbZHXb7Zt5mP6CzUBAZ64aoXKsCv5%2BVKLPbNos9AQVhLEncZ6CmniO%2Bxo6e0z0&X-Amz-Signature=187837816b85d653291b89c86305e3e6568136d22b1d34101ae934d33cb48778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
