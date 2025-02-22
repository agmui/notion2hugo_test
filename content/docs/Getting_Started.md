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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQJ5IKBT%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtLrdJYrQdpg6zK2lhv1TfO7Ldi5CP5y7JL0Q6TsAquAIhAOppENlmdCPFYef3ti27DUMxFsj%2FV3dWLllWCy8Z3%2FxeKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHQVlVRuvNeLyIAXAq3AOgZsADERJGj6bkvqe9%2BZlkvaVkLqSYkhCK5ntlQnAZX1H5Fj5wqpg6p%2FlE2cblDvKW1aChm5zuEbi6NTb9uUX4jkCAEIPwyi%2FplEew0SXraYXRRyCg7wDpFmLQpr%2FMsc%2BXZHSVs6B6y3ZYMUWkfkGLbjfziiG5k9YeIz7JkMVZ6G%2BSJR0pkx11Zil%2B%2BPWO9gGLZvH6OvMu8u50b79GrLZ1ITPe1Tj82191%2FxDttlTAvaoxJLjtPw5HtQyBUoV8ctyK59qARvESAE0whFG19mrtYVnBkXYF1HUYm%2FT2I2p34RzuhUIQ3lnLqTcqQTJcjJM9chI3UcEOwxSCMtlZLbvgI2So1uSVbfCCINvXgdbVL2V3mx7mDGD5fHiTnfjLTFRuJNNY4Lx9KoaOv4iBnhT%2BCQt%2FXvjWlMHe5MNUbokDgZUugwMJqGl9NQYvrqVa8H5T9YlzrK6%2BNwlb7f1K83I5TnCPodNKrJhZem%2FhUgJ6MvK7jCoaLcY2MOb4RSlm7JQ5PV5tTLy6jjpw%2FMh1G4XlfJ5clxe%2B1JgHCCQ7KPiLdOsCBYIhUDKtNHz4%2B2jyGvghpxznDq4iKD7x%2Bor1de9ntFXOAXEYCVOt7C6Ua91gq%2B8Lr%2Fyw3GpemE116jDvz%2BS9BjqkAR2wjMSk94tXLw%2B95ubfYtEcdg1XnKoY201zNA8c9N7EuW%2FuI4O%2BWVZEDtljB138%2FSj43l7qFSFu1GrMAoRNedz%2FO%2BToBtKaRHy%2FjNvP3yWhQrb%2BkBUuYxio%2FfBG1EFSRcFPQ0Bd%2Bfu8ECexj4XQnR9TK%2B6OQBaSfP8iJ34hQdsiJltWH%2FOqgcEg94Zie7iF9S%2Fj49o3hrfv2qLn1RwpCyWtwB9C&X-Amz-Signature=3ca839fc4c5654c659e48761196e077ddc9c7b29936c82a89dcee4d7604e48a8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQJ5IKBT%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtLrdJYrQdpg6zK2lhv1TfO7Ldi5CP5y7JL0Q6TsAquAIhAOppENlmdCPFYef3ti27DUMxFsj%2FV3dWLllWCy8Z3%2FxeKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHQVlVRuvNeLyIAXAq3AOgZsADERJGj6bkvqe9%2BZlkvaVkLqSYkhCK5ntlQnAZX1H5Fj5wqpg6p%2FlE2cblDvKW1aChm5zuEbi6NTb9uUX4jkCAEIPwyi%2FplEew0SXraYXRRyCg7wDpFmLQpr%2FMsc%2BXZHSVs6B6y3ZYMUWkfkGLbjfziiG5k9YeIz7JkMVZ6G%2BSJR0pkx11Zil%2B%2BPWO9gGLZvH6OvMu8u50b79GrLZ1ITPe1Tj82191%2FxDttlTAvaoxJLjtPw5HtQyBUoV8ctyK59qARvESAE0whFG19mrtYVnBkXYF1HUYm%2FT2I2p34RzuhUIQ3lnLqTcqQTJcjJM9chI3UcEOwxSCMtlZLbvgI2So1uSVbfCCINvXgdbVL2V3mx7mDGD5fHiTnfjLTFRuJNNY4Lx9KoaOv4iBnhT%2BCQt%2FXvjWlMHe5MNUbokDgZUugwMJqGl9NQYvrqVa8H5T9YlzrK6%2BNwlb7f1K83I5TnCPodNKrJhZem%2FhUgJ6MvK7jCoaLcY2MOb4RSlm7JQ5PV5tTLy6jjpw%2FMh1G4XlfJ5clxe%2B1JgHCCQ7KPiLdOsCBYIhUDKtNHz4%2B2jyGvghpxznDq4iKD7x%2Bor1de9ntFXOAXEYCVOt7C6Ua91gq%2B8Lr%2Fyw3GpemE116jDvz%2BS9BjqkAR2wjMSk94tXLw%2B95ubfYtEcdg1XnKoY201zNA8c9N7EuW%2FuI4O%2BWVZEDtljB138%2FSj43l7qFSFu1GrMAoRNedz%2FO%2BToBtKaRHy%2FjNvP3yWhQrb%2BkBUuYxio%2FfBG1EFSRcFPQ0Bd%2Bfu8ECexj4XQnR9TK%2B6OQBaSfP8iJ34hQdsiJltWH%2FOqgcEg94Zie7iF9S%2Fj49o3hrfv2qLn1RwpCyWtwB9C&X-Amz-Signature=3ae31a2fa1e61dccb2e4632e535c246dd05897350362d51c963b75eb44dec917&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYXP4SQT%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdKft%2Fww2ByZXGmiqNG7Diss0lIV77u%2BuV%2Bsa2rYt5bAiEA%2BWBXfHe6%2Fsgc6UdSlvTTTLmJvzItrd2McwUwObKthCwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUAexa4cyJ3TPGWpCrcA4lSGxC%2BqhZuX6byBD8MdIYQKBQHwTq7oaN4JLhB5x1oO481n92kL1dL6dr879UjkI4n5qludYvQtzEEA5G1yqkRld%2BPLAXDtB7ICF7JfQY7UPRwKqrjW%2BuRhuSMD0Y6EXBc8Z3HpQKaRop%2FF68jcODBaYzS0PvcvBLDfY9iUa6Y4cK7umZYNRCrFpmMeHhQnzfKkFtFPjvKgXHrdgRuNU6WAOkEjuFXPzCNyEneTBQ%2FCMN1NU4aSnggbBL0iPBLCIy3XiOvMMTctpheUxX0m4ODMMxn5m2mOtPPbNufp16nCEKktir1PUhUS5P%2FrITadNV1IWCDSFNFFQcXa7%2BHvAk8jsD3MZFfzdt6Fscn%2B5yhcEHRV5pt0o6%2BV7pVQFgIIFH8IC1Bmjf%2Frppe7PQT0kIVpbYDm59jbgqPr9bDCw%2BEydE0HMqZl6aPHXtCavXku3OV4%2BXr5qO6B0yWD%2B5Z33aZfoKeFwGHeqYOKfesTXc4MGgRxbAICDpMFF2aLgS1hG%2BWzaGszoeQrwF16kD9SQZMVqkqbNp957TK9qx07OcElYV5y7ZggWYyeHUoacErlKYYu0PlD3apyzV7WKiQh6JpQYU9%2BoDazAvnLAlycWghx3wOg5rYZMC90IlUMJHQ5L0GOqUBidduDa%2BiQVXtdIN6V3qhqMArZgnSEeYBIay0TOFIZMbp8AqKBsKG5soGW7J0PaR8jSUAd4SdB4rxj1bgGQPKL9D823kwiaG6aAYJbvvvbkjUTVq1pYoG%2BfAjAi04yKAaELu1Hx2rsh4vvz%2F42452GDIB1pvGCbzPcIO1ubxLc8qjyGk3c7y2xPI%2BKrdHJrLdWS3ndqxQrauYg0PCfR6I0%2BQQrFim&X-Amz-Signature=77cd4359f3c2f5476c2ff6046cef6ba679f09c0003b1f076e42a79617e82e959&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W64QPTZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpHdo1TMkMlufK3hrWVdPUS05XLky8YIeQS9VV4bImhAiBuLAzPbwaia6EN3b79TVMZC%2B5Jr01%2FWsorZRVoHQG2gCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJnhkt4bOhn5PSjVKKtwDUNOzx5qifZv7uP7wjISXvBvKHdJ7usx8d5V8VhYGxqmLvv3H9H7jb56MeJql6e2oAVAtI8qQsNPzWRqHIEoHW0LQNCEsREvXk8jsdTJttTJF1ib13ZZpFaieJRD0yuTPeU1t8KUVrSiZLT4ZwcosDXs9rK6lGQJUUEri94lpG9KpnoUjFqGwIL9rVx1k30v%2FVLpUJwWvQYzqBQHAJbePCDCUoKnx1z8b569LTA3meZFHKtplb1QPJZIEI1XbaM6o%2BMQC20%2FjU2PImCfWxSqZualnALXoRGctuCAnZ%2FMEO6GYa1DSk60BMHlDdma2ah%2FUe6Q4I3ogdU1zzDIA3DksCPoJIGf0jkplkrTY6LKD9sJo1%2B4s3w%2Bf7x5felOwGw%2BndRY8RTnR9jdEaWiTkPxhVcXR0BCWxxbxYD%2B655tiMvlfBlqyP%2FRz0%2BqlqC9BFIercCiXPS5FOu7PO%2Ffo9iJVoNGqLNxKGfzVzvmRkI3SRw0cwDCcsdh3LlTDSCCE4ZI%2BaxGsL3CNJg385M0LWcwTAhOcrzjZf6ARZk7Z89XVZDc4CgG8ZJyGeiDJmyX1O0pRLm%2BBCY64GnUnsshLGncTYZpscbIWORzNlYZcaOlN66DaC6%2FtOm5W3bNmZV8wm8%2FkvQY6pgER6TJoNeua3Qol1OwcyZDGqwlL%2ByIrwLyvGOvebTJZOa0GH757f9J1Eqvl5%2FTCEentSr%2Flc%2FllAQwLArFscpX37IdmeRqxucMJ4%2BI%2BpWCo6bIIHeqnKks0dTxYZSS3tR%2FlYvaHC3S7t8v7xT2YoYmue8n76XTE%2FcNKRsRLU3yw64qdpGnX6n8S7KUTFVrSm46ncZXE2iBYY3R7zYCzWTqQpWPKhgCU&X-Amz-Signature=e5e80a56a32e1173538a6a6dc91cbc5770570416e623da07e9d736088247c387&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQJ5IKBT%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtLrdJYrQdpg6zK2lhv1TfO7Ldi5CP5y7JL0Q6TsAquAIhAOppENlmdCPFYef3ti27DUMxFsj%2FV3dWLllWCy8Z3%2FxeKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHQVlVRuvNeLyIAXAq3AOgZsADERJGj6bkvqe9%2BZlkvaVkLqSYkhCK5ntlQnAZX1H5Fj5wqpg6p%2FlE2cblDvKW1aChm5zuEbi6NTb9uUX4jkCAEIPwyi%2FplEew0SXraYXRRyCg7wDpFmLQpr%2FMsc%2BXZHSVs6B6y3ZYMUWkfkGLbjfziiG5k9YeIz7JkMVZ6G%2BSJR0pkx11Zil%2B%2BPWO9gGLZvH6OvMu8u50b79GrLZ1ITPe1Tj82191%2FxDttlTAvaoxJLjtPw5HtQyBUoV8ctyK59qARvESAE0whFG19mrtYVnBkXYF1HUYm%2FT2I2p34RzuhUIQ3lnLqTcqQTJcjJM9chI3UcEOwxSCMtlZLbvgI2So1uSVbfCCINvXgdbVL2V3mx7mDGD5fHiTnfjLTFRuJNNY4Lx9KoaOv4iBnhT%2BCQt%2FXvjWlMHe5MNUbokDgZUugwMJqGl9NQYvrqVa8H5T9YlzrK6%2BNwlb7f1K83I5TnCPodNKrJhZem%2FhUgJ6MvK7jCoaLcY2MOb4RSlm7JQ5PV5tTLy6jjpw%2FMh1G4XlfJ5clxe%2B1JgHCCQ7KPiLdOsCBYIhUDKtNHz4%2B2jyGvghpxznDq4iKD7x%2Bor1de9ntFXOAXEYCVOt7C6Ua91gq%2B8Lr%2Fyw3GpemE116jDvz%2BS9BjqkAR2wjMSk94tXLw%2B95ubfYtEcdg1XnKoY201zNA8c9N7EuW%2FuI4O%2BWVZEDtljB138%2FSj43l7qFSFu1GrMAoRNedz%2FO%2BToBtKaRHy%2FjNvP3yWhQrb%2BkBUuYxio%2FfBG1EFSRcFPQ0Bd%2Bfu8ECexj4XQnR9TK%2B6OQBaSfP8iJ34hQdsiJltWH%2FOqgcEg94Zie7iF9S%2Fj49o3hrfv2qLn1RwpCyWtwB9C&X-Amz-Signature=09fc1a1b4e556f6807491240a45d31c0550373e33761cc8e333cd414cdefe783&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
