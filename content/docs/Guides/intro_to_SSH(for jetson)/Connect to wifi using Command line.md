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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L2FPJQP%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCWsXl2Z9ZScFVjvYQo5k24dDuownGo3k9BzVpo%2FyJwxwIhAL2Yr%2F%2FbL4%2FIiCMltW54RTKXKqLHdOSc6PcNmfqf9V51Kv8DCDsQABoMNjM3NDIzMTgzODA1IgwmDjmfgvTm1TvEBLsq3AO0HOQG1lNKZoDLEInNeg5CYC%2FSAIW7e9JQVeEjurRL6MvIUThOoLzmUwJpe4VYCnjOdybeMDEWseYqWgSIdRLtHFfK38PCAHi57D265RPSkEcJQOZHSGqQEl3eqz9VC1TRs5Ic8PyxbJ0pQpnJqKC5vB7aufRFO12xT6z28sTO5PwCKHBYo7vT5CKXxqNVyVePK9z4%2BVxcXy9r0Vmihk7hu5ct7oVX6aJvPbugO1mplpwdetQsAS0JCdc54KDVQpyn%2BN7uCRfKkowShyzua871gTEyOCWLbTZMBDD0aGN5hnLLgZJA8xRmsOZtxacntivNfhubJ9uSwyKqZP2WppScoMfJ0eNZlDQDHaLCRDZADPQNG6pcpj9hN8LgXGv6WZzv%2FtJbXyuyFknma3bwniRAdaNNu%2BvN43GbC1hqEBhkYgEUscAWMOKGD7ez%2Fm15RUsLt8O1svpRWhLcGIDHSCPMy5Xa0fpxk%2F1eHldmhbrAFcgRP5sd%2BpFp8LDQnCIF54UMRQgzEh35nFIzPm6bumIND40hc0SijAkASekKMVcEk%2B8HO3%2BTL6uABXXO43XOmwk8Fbk1jrzJs%2FymFIW0UKYpyl8Y0IyP6gwuGwZoAORi%2FjoKIVpo6LYOKuuCRjC5nrjRBjqkAb5XiEc87uwGxALqcST0M0mAqbvli9TUe8tfu8tcspityBS%2F1DI%2F4tMVx7%2FiIwmhRWuEndYcl%2FelmK60NW9%2FLo3XXf6hpc%2FAH%2BiuyjSOBXxkIYkec%2FdOXscrZ5AxdzZTVZksc00s6%2BOv0JfgBGw4yuxzXNREUKObRFVuL9MnbdSn9GYKN88AmhQCIJ1pCNEGdaLek4Dpz5ba1V9n12Cc5omTsSaF&X-Amz-Signature=8479690e49ce38a278b037c1f78b4f5b0cc3fe8ebf08e32322f2df3d9a828ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
