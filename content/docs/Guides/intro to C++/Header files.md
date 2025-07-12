---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQ72XQW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDk6Xxd6HFcj92WOk55UuhoO5K6oB%2BQ4WQ11Z%2Fv9oLBQIhAJps4%2FjTPWQJ05m75QmAnknMwLZn9Xiou0GI1Tosu7b2KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFfzyNLJ0%2BrFJ3ZiYq3AObVZtzpINbk2ULT9EVpjkV9r5JxdgPEoD3jihzYWjQ4mxr6PQe7XYii339kWR2fVZbN0YaWY95iQ6L98thxaiP5I%2BN07amSad5kWpDbAP4RV%2F4gE16W9wgk%2F5%2F49hItyCyba2CsbTaN34t80%2FKvi3ddvcMLD1iaBexcuoSHdO7I0aU%2FxKX0vfdrau0rSJchKZtNpTeCAwg2LJem4qSSicJrFiPlwwgbA5mvbynyIH%2Bs9tX2%2BGc6g%2BVtTC0jktIzgsJSICtE6QzivBzvfDiLwCFkl%2BOOxMYB5JgrC8DucRNg3frfazlEFicOmMtfpRRn6vAZOcoT%2FSPwUhYb7VaQLq39GgKAzDUgZ6BEtBKlsSH0NE34MIEHq0qOUn6Wun7K1OjFOPWKCOxkMbk2Oa4gXUjM3UmGMRruaB6svjtLYMwC4LMiRA2wqdKWCzc6oiSGex2%2FW7F6To%2FIjW9s7TowD5TA%2BXFDqM7KPr2dsxslOoqJxrYU96gL6UGf4otWIImza7GbORo0o289PbPHT2KhsLmdLus2wFBR9Lt2xEBobgdCNDsVFTBAxOXBdeiUcju3W8%2F47dzFUfvJk7WfTyrVKveyKx5XzVOPRO136JFAIFsLh0W3Y4HgEvHEDueGzC9rcrDBjqkATIkzI7ceR4O6YsyPJSUzAA5%2FaaAZGteVk1iP7iUt0YdJws7CHUv2W9mSG5%2FGPFPkke%2B5ozVEhjO1Hul8tTGiz8glxbkm1VMAf9vvqDvw8sYr2SnmzlWLt6c%2BvNMXx%2Fq37O4fiWDIn0Sqw4nfe%2F23OHwttK1XWdAodk0PvV3iq26GUVtOnHOedNQ7VwoJsOQEuWFAuHKK10b4XEAJHoL5kHvkRyP&X-Amz-Signature=493e9d7554038b3bf7f139c14613a275cf91cbcc5ee9da24b9011afa2de64385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
