---
sys:
  pageId: "253da3bc-6297-80c8-93a9-f467dcefd643"
  createdTime: "2025-08-18T10:18:00.000Z"
  lastEditedTime: "2025-08-19T10:27:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/Connect to wifi using Command line.md"
title: "Connect to wifi using Command line"
date: "2025-08-19T10:27:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 194
toc: false
icon: ""
---

# connecting to wifi with CLI

To list all wifi connections available run:

```bash
nmcli device wifi list
```

To connect to a wifi run:

```bash
sudo nmcli device wifi connect <wifi name> password <wifi password>
```

### example:

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZHGWER2%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGh90r5hIG2x7haWcBvInMmrZggTNcOGMIP9t1aV6wwrAiB5bL3Trp0tyHOT4VSBVqqaU3d48Xzmc99e3%2Bmyt792%2ByqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKeA4gSrH%2BLO29Z7lKtwDEDiRnIGZII4ZrBnyENe8HmvQYLurw81a8kT010KAgPCrZKZG4bOjbp9Wi2%2BMIbKMa2%2FdWQrMbaW8E80TxKZtCf5xOhu931Y4mZfyB%2F%2FKvKiEnrI3DKadclckGPdME7arAoa0S4utQfJp3%2Bcc5%2FpFSgCRaOisOo06HjoxyljiaK2SV4266NWfLeW4F8UZ7MRa4r1D%2FoZoPdaNrQUFXJD%2BA32aNjpSfqW3Yg6qi9aVfvztV6CvvbdUG6eiLWWGkiCaG7MBYSdBT0cVWi4leZRVvRckBc%2B3r8TdOH%2B2rPKTRdCceklsb3Ocjj6KkGKdRbQscQ51uHnMogV8Ztx8SQWjmDtw3RfNrQdaXHJsJAO5rk9jw9UTa8xPaogkbk6drFBtkgCIFt9ru%2FHO7PJgQKL7NYH%2BuiQDb5bSio4xkY6bnIAdoI7%2Bbwsn%2BKczUoW7RjoyftvB7BSNitQbfTHABuM%2FrjUZrzGfbyJ0Sy%2FC%2Bgm801C4sm0D5UfE1SkQvK3OQYip6fHofvXWPQixV4ywaeprjhOofSj%2Fb8KqrZpA%2FSQ2V3AxiC9bO%2BT5IthGjF%2FxlyBTH7PRUcO%2FMqptFdkqyi%2BMF8gdiaKo3jjnfAv0B7kHx2GYHeOGEn0fhmGu5OowwunnzQY6pgE8yA4A%2FxX3%2BCE05B550EQrGvg5IZ2Q26Se%2BjgIxW3BWv8tErMhYLSDbJ%2F4TqQ05jMGkoaZwAt%2F%2Bq77nXBWAn19B3wffRPpawufEHgAJW49NLkUKIpD1J4ExDNd0q2K3Snf2wkiBqEioorUecxFxupoTGiEEGhbwkbtJ0eZ1uQ%2BrZvoCWwkR8G5bTdpHtJiX39EX1ZFco6kb6wOOfuXvYdQL9zuFH%2BS&X-Amz-Signature=83315f7f88fbf4a486e89a882cb30257fcd03a5d18b217faa05589395fd23a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
