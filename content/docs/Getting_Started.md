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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFCQ7FE%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIE8yAa1G6HuurcXq7xGhAYn9YcpQnbE0L%2BONMTCsv9sSAiEAket7DxWBnjGwueERm2o1Iq1MgulBBA%2Br4GTseHK%2BONEqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSDw9gLRLorkhuSjSrcA230ymyJFGEM2JORspzaqPhTN9%2FJAjQ9uweUHLtPV5niSRRZuVvieqKVqdu6aqReXQ%2Bjd%2Bf5lxc2aa8wmTXDLWsZDoT74yB%2FNMqYkBD2oULezm5bisdTJU5QIFg109m1RS38ZZentSbPW6JPHy7kf99RwCVzIZUUinP1d2WUWiZ1QGXoGh73CaA890uIpvvGUKaHTcGH6LW8rw47FOkt2Mo3L4ut9m3Hb6W9iakwfYlosAN4IX1HXp8UC8gBH2%2F%2FDMCdr25wv5SinwuBKq%2FH%2F1weX2qmuwiOwpUeue4KVYCNGDrcunOWGbKPsDBezbYCsTI4yjWRFxckjJMSEN1Z7X6so2pp5DhEdpkiW5hp%2FA4Iq8v0ajyEWMJom5U4vgfluS5glA7mfcGvBKmzWbI4mx5Ht1hC5iaDRSiiJbkLkCkSXdePV8VlVnYwVZOtotP6Ep%2FFfsueEPUqzPYMVuaOq1kVkAnPd8ocZa7Ii0ky6iUI5r65y9hCYwv21O1vZexMUVwOou2DCGgwDcVEfFwMUjvy9cxo0vyZmkRBR6SpxXxKiUfQxujZlpc7OB8Xvl3Yfn4RCqa58kR3XFSXbyxfPvpwcw80nsyFFIsRNJNY8pKbkwlkB%2FIVWV6bTDAEMOrnpsIGOqUBg2qzt%2FOerfw9QPNCPGK1j5Q4BRBzcofbEQ5PizgR4OUlQcYG%2BSCJO%2FQH%2BBQXor%2FMnZkb6leX6a1SiJU34yA45ysvfMfkrwWjN7ZgKcXQvDFPModOo7G1U1ux7n9StyvHiBouztRSP12sjEu%2F4P9JhugBYc81bkBLpbDgyt7r1B8ACKT6mJp5oSRH3PopLI5TAu6J6KgoIAedS0IHbyKOIzf78wkK&X-Amz-Signature=2978ee405b21e0ea118d01d790db5b69b8b830693c1e05ab06e332b3e42bf77c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFCQ7FE%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIE8yAa1G6HuurcXq7xGhAYn9YcpQnbE0L%2BONMTCsv9sSAiEAket7DxWBnjGwueERm2o1Iq1MgulBBA%2Br4GTseHK%2BONEqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSDw9gLRLorkhuSjSrcA230ymyJFGEM2JORspzaqPhTN9%2FJAjQ9uweUHLtPV5niSRRZuVvieqKVqdu6aqReXQ%2Bjd%2Bf5lxc2aa8wmTXDLWsZDoT74yB%2FNMqYkBD2oULezm5bisdTJU5QIFg109m1RS38ZZentSbPW6JPHy7kf99RwCVzIZUUinP1d2WUWiZ1QGXoGh73CaA890uIpvvGUKaHTcGH6LW8rw47FOkt2Mo3L4ut9m3Hb6W9iakwfYlosAN4IX1HXp8UC8gBH2%2F%2FDMCdr25wv5SinwuBKq%2FH%2F1weX2qmuwiOwpUeue4KVYCNGDrcunOWGbKPsDBezbYCsTI4yjWRFxckjJMSEN1Z7X6so2pp5DhEdpkiW5hp%2FA4Iq8v0ajyEWMJom5U4vgfluS5glA7mfcGvBKmzWbI4mx5Ht1hC5iaDRSiiJbkLkCkSXdePV8VlVnYwVZOtotP6Ep%2FFfsueEPUqzPYMVuaOq1kVkAnPd8ocZa7Ii0ky6iUI5r65y9hCYwv21O1vZexMUVwOou2DCGgwDcVEfFwMUjvy9cxo0vyZmkRBR6SpxXxKiUfQxujZlpc7OB8Xvl3Yfn4RCqa58kR3XFSXbyxfPvpwcw80nsyFFIsRNJNY8pKbkwlkB%2FIVWV6bTDAEMOrnpsIGOqUBg2qzt%2FOerfw9QPNCPGK1j5Q4BRBzcofbEQ5PizgR4OUlQcYG%2BSCJO%2FQH%2BBQXor%2FMnZkb6leX6a1SiJU34yA45ysvfMfkrwWjN7ZgKcXQvDFPModOo7G1U1ux7n9StyvHiBouztRSP12sjEu%2F4P9JhugBYc81bkBLpbDgyt7r1B8ACKT6mJp5oSRH3PopLI5TAu6J6KgoIAedS0IHbyKOIzf78wkK&X-Amz-Signature=b4388bfb85747e378875e1083d8d94a06ac0502e13ef59d9fbb54393572bc5bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFCQ7FE%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIE8yAa1G6HuurcXq7xGhAYn9YcpQnbE0L%2BONMTCsv9sSAiEAket7DxWBnjGwueERm2o1Iq1MgulBBA%2Br4GTseHK%2BONEqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSDw9gLRLorkhuSjSrcA230ymyJFGEM2JORspzaqPhTN9%2FJAjQ9uweUHLtPV5niSRRZuVvieqKVqdu6aqReXQ%2Bjd%2Bf5lxc2aa8wmTXDLWsZDoT74yB%2FNMqYkBD2oULezm5bisdTJU5QIFg109m1RS38ZZentSbPW6JPHy7kf99RwCVzIZUUinP1d2WUWiZ1QGXoGh73CaA890uIpvvGUKaHTcGH6LW8rw47FOkt2Mo3L4ut9m3Hb6W9iakwfYlosAN4IX1HXp8UC8gBH2%2F%2FDMCdr25wv5SinwuBKq%2FH%2F1weX2qmuwiOwpUeue4KVYCNGDrcunOWGbKPsDBezbYCsTI4yjWRFxckjJMSEN1Z7X6so2pp5DhEdpkiW5hp%2FA4Iq8v0ajyEWMJom5U4vgfluS5glA7mfcGvBKmzWbI4mx5Ht1hC5iaDRSiiJbkLkCkSXdePV8VlVnYwVZOtotP6Ep%2FFfsueEPUqzPYMVuaOq1kVkAnPd8ocZa7Ii0ky6iUI5r65y9hCYwv21O1vZexMUVwOou2DCGgwDcVEfFwMUjvy9cxo0vyZmkRBR6SpxXxKiUfQxujZlpc7OB8Xvl3Yfn4RCqa58kR3XFSXbyxfPvpwcw80nsyFFIsRNJNY8pKbkwlkB%2FIVWV6bTDAEMOrnpsIGOqUBg2qzt%2FOerfw9QPNCPGK1j5Q4BRBzcofbEQ5PizgR4OUlQcYG%2BSCJO%2FQH%2BBQXor%2FMnZkb6leX6a1SiJU34yA45ysvfMfkrwWjN7ZgKcXQvDFPModOo7G1U1ux7n9StyvHiBouztRSP12sjEu%2F4P9JhugBYc81bkBLpbDgyt7r1B8ACKT6mJp5oSRH3PopLI5TAu6J6KgoIAedS0IHbyKOIzf78wkK&X-Amz-Signature=de51bb0280343d12806eb5cf058769be1841c92cb852ada9c00721ab8e488db4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZIZJYFZ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDay9ezBMnlgTdczRbQf4JYsp8yRNz4r42jm2mE23CY0AIgUYndn%2B0QK0v3qpLMvUzz6OWQRk7kInlsDk4XcPbhElYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTY4lV4sgvslYUQ%2FyrcAxnFONIKNayvndmKYG0BoSbSNZq2l1u0gzmwK%2FonK0MlOaP3wz9sxRQGX3tqzyuHn1yF2C3AwXHlXky8fxs9lfRgtgtgBn3a7jI5Utysw8hTUI7R4g2v8MGGkwokgGiYiJmDSp2muX6bvy96M%2FLJYNxdLyuEcjP%2FGdoiim0mJhooleyaB8Q3TTtDEGF%2BfC3zBmj%2FtXHzH5IiFVukk%2B6LEcBJOOuPLb9dJMVgug6KK2bZ6D6t3XQ82PJpNmkHM%2FBmkU15IlpTeZ9NRJmQrR788gvRrmyewWSNVJNebA7%2FPOIMA5%2BRsA11M%2BZzoOkjvZzFVfrKlil0v76FMjiI74y9sggcTAWzQrQ9562t3OEXNacWBsIx%2BJubbq1UpaeWT66DkEg496iePAhaZnc3VTQw64aJ7ZgrBKT0fKNluPKE1KQp8BqUG6qu7VU%2FJ8SnCZ9wyKdZPb6mfT3%2BMBR54Rlekhky5UwO9GTPtM9EK5Warle8ZsryST6n2V8H%2FOAMClkE6mZZ4Kr07tSyA11H3%2BDE%2BXsVLLLKJgLiVY2CS%2FtBqiCBJCNLYpKnoffwWQJsx5gL1OZjwq%2BWp6wrEDBNRV9axbxA69iq2MN3h61blM%2F9UZUfQYHRIUnHMfGEW9mjMMLopsIGOqUB5vzLgjW8007KDUJgae2Ro6nfe5b4VJES8R0zjFHQMrZdfuhBwYRCb57%2F%2F30W1IVsfyxt0MuTkshi%2Fch62dBZIwbeOYDbsNTGrfqQagglWPCGsMKpIAjuTdXHOKtXcNnEdt823TazdZ4nRaUqnmvI0eoGlJMI65YbB0p2L8%2Ff9C8YYTFu4I3l2Ulkp22pz7ijy5MMFz015eQUp4wEd1nWDuM%2F9gHL&X-Amz-Signature=d5660063b6a93c94593ea23f65053065257ba0b685eac10b7d859a2c67291878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UBXACYD%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCID4g%2Fb21aZ58NVURoz0xe1e30QUqSe1W%2BEBGNNADMmOpAiEAkO%2BbFDxTZlVX7mdK2yzSjjqogYmLQ2XItEv9hXTa7pgqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFffM7fancVSW06XoyrcA9NKFUghsVObd0rsbG%2F%2Fgc43PUzBx2GsfuKHGPRriSR5NvDEYJKmQ2tmEpogwwUK0wUeqc8K0XQZRj6UAj4zxKaEwy0qaPhCuYBvjLI9jU94cxsAqTByQip9OKdtLCNlwE2J9159CtxYFQvovVQ6Kex6BdM5a6IVMqxeQpyua9oPMkt2OjVelPz0wpd3DzTnLoNuqHBt%2B7V%2B%2FboWgyHI6eH1OG9%2FaMs5e3CGbpSQZNzomH2XOQxplUkC%2BexONgoOK%2BSI2tsZqmJ0%2FiWN9J0y%2F3payrv%2BE2ftTdeOrxsS6cKjNnjc5wTVwt%2FWseJcwMpQU5S53T4J50nkQiUPKhboHGBDyWTALEbNth6hv2PvLnqyjuD918Jaux71KNK7KMxBmXnY3i6To4XcRWAsrNI4FI%2Bb%2BBlR9CCqUYJ4%2BBQL2NzJ4iHlJC%2Bftw%2FtuhneZ6GqM%2FU0k9KT0GJ9s5ZpdqCLrLqKbEzlG3CQSrZranT0q2RYTenqdLGb24EFvvImtBtrYFMlXbBh%2F4x4bFNg4RGJvNrxw7owFChm9ZrwazrvgWJnTa7%2BFO38G5bimvS69DCG4opWBzIFeQVjCMrnLPDsGt9PWpTS9jJxNO99XkhOg91tUCBitUwLTAGgzTrxMO7npsIGOqUBqhn1VXJYQ0sYb3x8R3NLCuGADd1q8sOruefmtBqDSzr0uaB0dlOc6Cu2PbmV%2FQtSQeT%2FMbofpBifDzjj7U5suF3%2Bx2%2B4zXITdwm30OAIKrru5kYa1RAyvYtPwmyOzmBAzp4HsBA9P05v8t9HSxoi78i3GGwwkR1ZimIJB5k%2BZSCllNbQX3xuLDMbpVOGt8v50rnggz%2B3bD230aPebDxCH8l73Mq0&X-Amz-Signature=57daab3056c36c84e7fad5f4d11b29069196d744368ddbb1bd29859bdaf51003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFCQ7FE%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIE8yAa1G6HuurcXq7xGhAYn9YcpQnbE0L%2BONMTCsv9sSAiEAket7DxWBnjGwueERm2o1Iq1MgulBBA%2Br4GTseHK%2BONEqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSDw9gLRLorkhuSjSrcA230ymyJFGEM2JORspzaqPhTN9%2FJAjQ9uweUHLtPV5niSRRZuVvieqKVqdu6aqReXQ%2Bjd%2Bf5lxc2aa8wmTXDLWsZDoT74yB%2FNMqYkBD2oULezm5bisdTJU5QIFg109m1RS38ZZentSbPW6JPHy7kf99RwCVzIZUUinP1d2WUWiZ1QGXoGh73CaA890uIpvvGUKaHTcGH6LW8rw47FOkt2Mo3L4ut9m3Hb6W9iakwfYlosAN4IX1HXp8UC8gBH2%2F%2FDMCdr25wv5SinwuBKq%2FH%2F1weX2qmuwiOwpUeue4KVYCNGDrcunOWGbKPsDBezbYCsTI4yjWRFxckjJMSEN1Z7X6so2pp5DhEdpkiW5hp%2FA4Iq8v0ajyEWMJom5U4vgfluS5glA7mfcGvBKmzWbI4mx5Ht1hC5iaDRSiiJbkLkCkSXdePV8VlVnYwVZOtotP6Ep%2FFfsueEPUqzPYMVuaOq1kVkAnPd8ocZa7Ii0ky6iUI5r65y9hCYwv21O1vZexMUVwOou2DCGgwDcVEfFwMUjvy9cxo0vyZmkRBR6SpxXxKiUfQxujZlpc7OB8Xvl3Yfn4RCqa58kR3XFSXbyxfPvpwcw80nsyFFIsRNJNY8pKbkwlkB%2FIVWV6bTDAEMOrnpsIGOqUBg2qzt%2FOerfw9QPNCPGK1j5Q4BRBzcofbEQ5PizgR4OUlQcYG%2BSCJO%2FQH%2BBQXor%2FMnZkb6leX6a1SiJU34yA45ysvfMfkrwWjN7ZgKcXQvDFPModOo7G1U1ux7n9StyvHiBouztRSP12sjEu%2F4P9JhugBYc81bkBLpbDgyt7r1B8ACKT6mJp5oSRH3PopLI5TAu6J6KgoIAedS0IHbyKOIzf78wkK&X-Amz-Signature=b4cc3352945a1e7911d5b40246608c578a853b6e17881b11b64b36df3a0fe8bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
