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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYT4VL7Z%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrFImk5KBdx3SC0DyV1Kc3Y1FzJpeSvIEunB6pzwvWpwIhAKhzdsYdg9VFwp4O3P15%2FKBYjOrYgM4D7pDxZNb6gfrPKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWPRN2QwHdWzmeunEq3APsEV03w0DaXrq6U5Nkxw2H2fpBq%2FKIczm4D35%2BNwKmS%2FUdlOjSXXxsXcfz9AJ%2BU0OSC861xxgP16yheWnLPZE96BRCTg8m5gnyClMTCsvR0Eam%2BoMvVXtFFM63ob5t8evXUZ0IzXqzZM%2BFJSRGO8xyJ%2Bgv%2BLhjeG9uZkyB5jI6ioPwOIWFKoTerPK8L6M%2FOyU%2FXagUAcfzEPAu9aKimrECasQ27jDKa%2FlFul%2BE02jAqRHG%2Bp1H5CcWwmz8SwAJAI%2Br%2F7uKguTk60rkuIugMU4dZPkOE93ZiF4YyPboxwriWNr3bgXv9pGfCVDlD1CSUPiS3AdaXV3FTz7ZXf52a%2Fmf%2BsfwewFRRbRDM6F9wRnikvqfvi%2BbxhmRgoxxi1EtbXtTXp3%2F%2FEzRqSmbBXB3UxXcNMWjpiwLwulQ1Ihyrx0wJHX8qaMwjqxQecM5gqPA6lPdx3GVKINfyAo3SS5Klxhn%2BuZMSr%2FWvaHGV5ICmg9Xx54jXj7vSyeQxNE6FliouALZgVRIgXRKWfeuF0Z9fn6ohQmZvvfADF%2FnQk507Ws%2BXbFPDMMwBPOZ%2B%2BG%2BHdmwuNGTmCES3ZLSyHE61aeer6%2F3XtanwVnawtTuUGQcCNuEVyN9Q9NN6lK%2B%2Bdn%2FfzDu8a%2FIBjqkAbO8cdWGiLSiTPLD5pNdxeUxEUagv4wJY12ghaROs3LbSWgu6v7NaurNGUzqfy6z1cThVqFEW0UZs4U6M6vat0ujr%2Foikezexjvy8P2q9EuBsvpKrTEQx58XtkwVGDSqKQc6zB5XHz60LoB%2FE%2FO8lkxaM6mLk6b0Ov0SeyneJA4cFcwWnzRIAuyKYRMVcC%2FvkyCyP%2Bkz9NgnxNIjCR13b%2BKjzr4q&X-Amz-Signature=e96a16f830951b915ffac5f4f0e763229c094800b792760eb939d9c7473a3faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
